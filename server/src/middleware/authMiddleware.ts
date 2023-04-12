import jwt from "jsonwebtoken";
import { IRequest } from "../config/interfaces";
import { Response, NextFunction } from "express";

import dotenv from "dotenv";
dotenv.config();

export async function cookieAuth(
  req: IRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;
  try {
    if (token === undefined || null)
      return res.status(403).json({ message: "Error! No token!" });
    const user = jwt.verify(token, process.env.SECRET as string);
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    return res.redirect("/login");
  }
}
export default cookieAuth;
