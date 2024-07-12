import dotenv from "dotenv";
import Stripe from "stripe";
import nodemailer from "nodemailer";
dotenv.config();

export const makePaymentForChanneling = async (request, response) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const endpointSecret =
    "whsec_831a159d34a4d2bd73d1d53972eeabdf4c2e27e674e1a782e862fe6b63c7a1f2";

  const sig = request.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    console.log("Event", event);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    console.log("Error", err);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("Session", session);
      const emailTo = session.customer_details.email;
      console.log("To Email", emailTo);
      console.log("From email", process.env.EMAIL);
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.APP_PASSWORD,
        },
      });

      const info = transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: emailTo, // list of receivers
        subject: "Thanks for the payment", // Subject line
        text: "Payment Received", // plain text body
        html: `
        Hello ${session.customer_details.name},<br>
        <br>
        Thank you for making the payment.<br>
        <br>
        `, // html body
      });

      console.log("Message sent: %s", info.messageId);

      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.status(200).send();
};
