import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const mongoUrl = process.env.MONGO_URL;
const client = new MongoClient(mongoUrl);

let db;

export async function connectDB() {
  try {
    await client.connect();
    db = client.db("MedLink");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

export { db, client };
