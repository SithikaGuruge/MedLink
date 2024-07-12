import { db } from "../db.js";
import { ObjectId } from "mongodb";

export const getUserbyID = async (req, res) => {
  // send the user details to the frontend
  const userId = req.user.userId;
  const objectId = new ObjectId(userId);
  const user = await db.collection("Users").findOne({ user: objectId });
  res.json(user);
};

export const updateUserbyID = async (req, res) => {
  try {
    const userId = req.user.userId;
    const objectId = new ObjectId(userId);
    const { name, email, phone, address, age, photo } = req.body;
    const user = await db.collection("Users").updateOne(
      { user: objectId },
      {
        $set: {
          name: name,
          email: email,
          contactNumber: phone,
          address: address,
          age: age,
          picture: photo,
        },
      }
    );
    res.status(200).json(user);
    console.log("User updated successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("User update failed");
  }
};
