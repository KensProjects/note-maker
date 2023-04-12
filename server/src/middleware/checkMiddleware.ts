import { NextFunction, Request, Response } from "express";

export const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const tokenExists = req.cookies.token;
  if (tokenExists) {
    return res
      .status(403)
      .json({ message: "User logged in! Please log out previous user." });
  }
  next();
};
