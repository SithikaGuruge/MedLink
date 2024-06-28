import { validateUser } from "../utils/validators.js";
import { db } from "../db.js";

const getUsers = async (req, res) => {
  try {
    const users = await db.collection("Users").find({}).toArray();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const error = validateUser(user);
    if (error) {
      return res.status(400).json({ error });
    }
    const result = await db.collection("Users").insertOne(user);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getUsers };
