import { db } from "../db.js";

const getUsers = async (req, res) => {
  try {
    const users = await db.collection("Users").find({}).toArray();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getUsers };
