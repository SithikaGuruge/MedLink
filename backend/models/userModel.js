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
  age: {
    type: Number,
  },
  contactNumber: {
    type: String,
  },
});

const User = mongoose.model("Users", userSchema);

export { User };
