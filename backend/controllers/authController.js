import { User } from "../models/userModel.js";
import { UserAccDetails } from "../models/userAccDetailsModel.js";
import { validateUser } from "../utils/validators.js";
import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const {
      name,
      username,
      age,
      contactNumber,
      role,
      password,
      passwordConfirm,
    } = req.body;

    const error = validateUser({
      name,
      username,
      age,
      contactNumber,
      role,
      password,
      passwordConfirm,
    });
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const existingUser = await db.collection("UserAccountDetails").findOne({
      username,
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUserAccDetails = new UserAccDetails({
      username,
      role,
      password: hashedPassword,
    });

    const { insertedId } = await db
      .collection("UserAccountDetails")
      .insertOne(newUserAccDetails);

    const newUser = new User({
      name,
      user: insertedId,
      age,
      contactNumber,
    });

    await db.collection("Users").insertOne(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await db
      .collection("UserAccountDetails")
      .findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE || "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { signup, login };
