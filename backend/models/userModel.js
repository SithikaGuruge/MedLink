import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  user: {
    type: Object,
    required: [true, "Object ID is required!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email!"],
    unique: true,
  },
  age: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  picture: {
    type: String,
  },
});

const User = mongoose.model("Users", userSchema);

export { User };
