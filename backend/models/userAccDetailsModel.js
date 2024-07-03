import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userAccDetailsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username!"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["customer", "service provider", "admin"],
    default: "customer",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },

  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userAccDetailsSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const UserAccDetails = mongoose.model(
  "UserAccountDetails",
  userAccDetailsSchema
);

export { UserAccDetails };
