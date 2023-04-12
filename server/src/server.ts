import express from "express";
const app = express();

import cors from "cors";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const port:number = Number(process.env.PORT) ?? 10000;
import { connectDB } from "./config/db";

import {
  getUser,
  createUser,
  loginUser,
  logoutUser,
} from "./controllers/userControllers";

import { createNote, deleteNote } from "./controllers/noteControllers";
import { cookieAuth } from "./middleware/authMiddleware";
import { checkLogin } from "./middleware/checkMiddleware";

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

connectDB();

app.get("/", cookieAuth, getUser);

app.post("/register", checkLogin, createUser);

app.post("/login", checkLogin, loginUser);

app.get("/logout", cookieAuth, logoutUser);

app.post("/", cookieAuth, createNote);

app.delete("/delete/:id", cookieAuth, deleteNote);

app.listen(port);
