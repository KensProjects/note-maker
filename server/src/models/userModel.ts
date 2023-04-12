import mongoose from "mongoose";

import { IUser } from "../config/interfaces";



const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes: [
    {
      label: { type: String, required: true },
      note: { type: String, required: true },
      createdAt: { type: String, required: true },
    },
  ],
});

export const User = mongoose.model("user", userSchema);
