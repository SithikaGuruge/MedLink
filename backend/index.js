import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const port = 5002;
const app = express();
const mongoUrl = process.env.MONGO_URL;

//connect to mongodb
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => {
    console.log("Error connecting to mongodb", error);
  });

//middlewares
app.use(express.json());
app.use(cors());

// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     age: Number,
//     contact_number: String,
//   }  
// );

// const userModel = mongoose.model("user",userSchema);

// app.get("/users",async(req,res)=>{
//   const users = await userModel.find();
//   res.json(users);
// })



app.listen({ port }, () => {
  console.log(`Server is running on port ${port}`);
});
