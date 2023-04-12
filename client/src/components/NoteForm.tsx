import { useState } from "react";

import axios from "axios";

import { BASE_URL } from "../config/base_url";

import { INote } from "../config/note_interface";

import Spinner from "./Spinner";

export default function NoteForm() {
  const [note, setNote] = useState<INote>({
    label: "",
    note: "",
    createdAt: "",
    _id: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleCreateNote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post(
        `${BASE_URL}`,
        {
          label: `${note.label}`,
          note: `${note.note}`,
        },
        { withCredentials: true }
      );
      setNote({ label: "", note: "", createdAt: "", _id: "" });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <div
        id="note-maker-wrapper"
        className="flex justify-center items-center pt-12"
      >
        <form
          onSubmit={handleCreateNote}
          className="bg-gray-100 border-4 border-black p-4 flex items-center justify-center flex-col"
        >
          <div
            id="label-wrapper"
            className="flex flex-col justify-center items-center pb-4 w-full"
          >
            <label htmlFor="label-input">Label:</label>
            <input
              type="text"
              id="label-input"
              onChange={(e) => setNote({ ...note, label: e.target.value })}
              placeholder="Enter label here..."
              required
              value={note.label}
              name="label-input"
              className="bg-white w-full"
            />
          </div>
          <div id="note-wrapper" className="flex flex-col justify-center items-center">
            <label htmlFor="note-area">Note:</label>
            <textarea
              rows={3}
              cols={40}
              onChange={(e) => setNote({ ...note, note: e.target.value })}
              placeholder="Enter note here..."
              required
              value={note.note}
              name="note-input"
              className="bg-white"
              id="note-area"
              maxLength={200}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
