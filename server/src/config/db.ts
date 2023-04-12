import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
  } catch (e) {
    console.error(e);
  }
}
