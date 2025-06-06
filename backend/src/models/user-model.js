import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your name"],
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [30, "Name must be less than 30 characters"],
      unique: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: [true, "Please enter your name"],
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [30, "Name must be less than 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    phone: {
        type: Number,
        required: true
    },
    addressDetails: {
        address: String,
        city: String,
        state: String,
        pincode: Number, 
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
