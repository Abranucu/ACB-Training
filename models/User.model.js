const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "LastName is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    age: {
      type: Number,
      required: [true, "Age is required."],
    },
    sex: {
      type: String,
      required: [true, "Sex is required."],
      enum: ["Male", "Female"],
    },
    height: {
      type: Number,
      required: [true, "Height is required."],
    },
    weight: {
      type: Number,
      required: [true, "Weight is required."],
    },
    currentLevel: {
      type: String,
      required: true,
      enum: ["Low", "Intermediate", "High"],
    },
    goal: {
      type: String,
      required: true,
      enum: ["Lose fat", "Maintenance", "Gain muscle"],
    },
    proflilePic: {
      String,
      default: "",
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
