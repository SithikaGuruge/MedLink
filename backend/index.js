import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import getServiceProviderRoute from "./routes/serviceProvider.js";
import paymentgatewayRouter from "./routes/paymentRouter.js";
import userRouter from "./routes/userRouter.js";
import protectedRouter from "./routes/protectedRouter.js";
import doctorRouter from "./routes/doctorsRouter.js";
import { connectDB } from "./db.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cookieParser());

//start the server and connect to mongodb

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
  }
}

startServer();

//middlewares

app.use(
  cors({
    origin: "*",
    credentials: true,
    exposedHeaders: ["Authorization"],
  })
);

//routes
app.use("/payment", paymentgatewayRouter);
app.use(express.json());
app.use("/serviceProvider", getServiceProviderRoute);
app.use("/auth", userRouter);
app.use("/protected", protectedRouter);
app.use("/doctor", doctorRouter);
