const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    age: { type: Number, required: true, min: 15, max: 80 },
    email: { type: String, required: true, minlength: 5, unique: true },
    city: { type: String, required: true, minlength: 3 },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Others"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
