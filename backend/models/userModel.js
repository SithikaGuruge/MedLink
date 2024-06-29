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
    required: [true, "Please tell us your age!"],
  },
  contactNumber: {
    type: String,
    required: [true, "Please tell us your contact number!"],
  },
});

const User = mongoose.model("Users", userSchema);

export { User };
