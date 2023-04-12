import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface IRequest extends Request {
  user?: JwtPayload | string;
  cookies: { token: string };
}

export interface IUsername {
  username?: string;
}
export interface IArray {
  label: string;
  note: string;
  _id?: string;
  id?: string;
}
export type IUser ={
  username: string;
  password: string;
  notes: [{
    deleteOne?: any
     label: string; note: string; createdAt: string, _id?:string 
}];
}
export type TNote = {  label: string; note: string; createdAt: string };
