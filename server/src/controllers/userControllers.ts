import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/userModel";
import { IRequest } from "../config/interfaces";
import { IUsername } from "../config/interfaces";

export const getUser = async (req: IRequest, res: Response) => {
  try {
    const { username } = req.user as IUsername;
    const user = await User.findOne({ username: username });
    res.json(user?.notes);
  } catch (error) {
    console.error(error);
  }
};

export async function createUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(401).json({ message: "Please complete all fields." });
    }

    const usernameExists = await User.findOne({ username: username });
    if (usernameExists) {
      return res.status(403).json({ message: "Error!" });
    }
    const hashedPassword = await bcrypt.hash(password, 15);
    const newUser = await User.create({
      username: username,
      password: hashedPassword,
      notes: [],
    });
    const payload = {
      id: newUser._id,
      username: newUser.username,
      password: newUser.password,
    };
    const token = jwt.sign(payload, process.env.SECRET as string, {
      expiresIn: "1h",
    });
    const hr = 1000 * 60 * 60; //1 hour
    res.cookie("token", token, {
      expires: new Date(Date.now() + hr),
      httpOnly: true,
    });

    return res.json({ token: token }).redirect("/");
  } catch (error) {
    console.error(error);
  }
}
export async function loginUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(401).json({ message: "Please complete all fields." });
    const user = await User.findOne({ username: username });
    if (!user) return res.status(403).json({ message: "Error!" });
    const passMatches = await bcrypt.compare(password, user.password);
    if (!passMatches) return res.status(403).json({ message: "Error!" });
    const payload = {
      id: user._id,
      username: user.username,
      password: user.password,
    };
    const token = jwt.sign(payload, process.env.SECRET as string, {
      expiresIn: "1h",
    });
    const hr = 1000 * 60 * 60;
    res.cookie("token", token, {
      expires: new Date(Date.now() + hr),
      httpOnly: true,
    });
    return res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

export function logoutUser(req: Request, res: Response) {
  return res.clearCookie("token").json({ message: "User logged out." });
}
