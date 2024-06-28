import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import getUsersRoute from "./routes/users.js";
import getServiceProviderRoute from "./routes/serviceProvider.js";
import { connectDB } from "./db.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

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
app.use(express.json());
app.use(cors());

//routes
app.use("/users", getUsersRoute);
app.use("/serviceProvider", getServiceProviderRoute);
