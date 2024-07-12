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
    const {
      name,
      email,
      role,
      password,
      passwordConfirm,
      picture,
      Type,
      userSub,
    } = req.body;

    if (Type === "email_joined") {
      const existingUser = await db
        .collection("UserAccountDetails")
        .findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(userSub, 12);

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
        email,
        user: insertedId,
        address: "",
        contactNumber: "",
        age: "",
        picture,
      });
      await db.collection("Users").insertOne(newUser);
      return res.status(201).json({ message: "User created successfully" });
    } else {
      const error = validateUser({
        name,
        email,
        role,
        password,
        passwordConfirm,
      });
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      const existingUser = await db
        .collection("UserAccountDetails")
        .findOne({ email });

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
        email,
        user: insertedId,
        address: "",
        contactNumber: "",
        age: "",
        picture,
      });
      await db.collection("Users").insertOne(newUser);
      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, Type, userSub } = req.body;
    const user = await db.collection("UserAccountDetails").findOne({ email });
    if (Type === "email_joined") {
      console.log("email login");

      const isPasswordCorrect = await bcrypt.compare(userSub, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      if (!user) {
        return res
          .status(400)
          .json({ message: "Sign-up with your Google account first!" });
      }
    } else {
      console.log("normal login");

      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
    }

    console.log("hi");

    const token = jwt.sign(
      { email, userId: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE || "1h",
      }
    );

    res.setHeader("Authorization", `Bearer ${token}`);

    console.log("Token sent in response headers:", token);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { signup, login };
