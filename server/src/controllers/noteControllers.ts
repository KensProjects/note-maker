import { IRequest, TNote } from "../config/interfaces";
import { Response } from "express";
import { User } from "../models/userModel";
import { IUsername } from "../config/interfaces";

function fullDate() {
  const date = new Date(Date.now());
  const newDate = date.toLocaleDateString();
  const newTime = date.toLocaleTimeString();
  const fullTime = newDate.concat(" ", newTime);
  return fullTime;
}

export async function createNote(req: IRequest, res: Response) {
  try {
    const { username } = req.user as IUsername;
    const selectedUser = await User.findOne({ username: username });
    let userNoteArray = selectedUser?.notes!;
    const { label, note } = req.body;
    if (!label || !note)
      return res
        .status(401)
        .json({ message: "Please enter a label and a note." });
    const newNote: TNote = {
      label: label,
      note: note,
      createdAt: fullDate(),
    };
    userNoteArray?.push(newNote);

    await selectedUser?.save();
    res.json(newNote);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteNote(req: IRequest, res: Response) {
  try {
    const { username } = req.user as IUsername;
    const selectedUser: any = await User.findOne({ username: username });
    const note = selectedUser?.notes.id(req.params.id);
    const noteExists = selectedUser?.notes.includes(note);
    if (noteExists) {
      await note.deleteOne();
      const updated = await selectedUser?.save();
      res.json(updated?.notes);
    } else {
      return res.status(401).json({ message: "Note not found." });
    }
  } catch (error) {
    console.error(error);
  }
}
