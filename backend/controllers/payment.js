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
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Payment!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
        }
        .content {
            padding: 20px;
        }
        .footer {
            font-size: 12px;
            color: #777;
            padding-top: 10px;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #ffffff;
            background-color: #4CAF50;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You!</h1>
        </div>
        <div class="content">
            <p>Hello ${session.customer_details.name},</p>
            <p>We have successfully received your payment. Thank you for your promptness and support!</p>
            <p>Your payment has been processed successfully. If you have any questions or need further assistance, feel free to contact us.</p>
            <a href="#" class="button">View Your Receipt</a>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} MediLink. All rights reserved.</p>
            <p>If you have any issues, please <a href="mailto:support@yourcompany.com">contact us</a>.</p>
        </div>
    </div>
</body>
</html>

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
