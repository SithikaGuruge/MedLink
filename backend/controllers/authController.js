import { User } from "../models/userModel.js";
import { UserAccDetails } from "../models/userAccDetailsModel.js";
import { validateUser } from "../utils/validators.js";
import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const signup = async (req, res) => {
  try {
    const { name, email, role, password, passwordConfirm } = req.body;

    const error = validateUser({
      name,
      email,
      role,
      password,
      passwordConfirm,
    });
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const existingUser = await db.collection("UserAccountDetails").findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUserAccDetails = new UserAccDetails({
      email,
      role,
      password: hashedPassword,
    });

    const { insertedId } = await db
      .collection("UserAccountDetails")
      .insertOne(newUserAccDetails);

    const newUser = new User({
      name,
      user: insertedId,
    });

    await db.collection("Users").insertOne(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.collection("UserAccountDetails").findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email, userId: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE || "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { signup, login };
