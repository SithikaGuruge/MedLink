import { db } from "../db.js";
import { ObjectId } from 'mongodb';

export const getUserbyID = async (req, res) => {
  // send the user details to the frontend
  const userId = req.user.userId;
  const objectId = new ObjectId(userId);
  const user = await db.collection("Users").findOne({ user: objectId });
  console.log(user);
  res.json(user);
};
