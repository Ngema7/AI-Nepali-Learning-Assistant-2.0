const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String
    },

    avatar: {
      type: String,
      default: ""
    },

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student"
    },

    xp: {
      type: Number,
      default: 0
    },

    streak: {
      type: Number,
      default: 0
    },

    badges: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Badge"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);