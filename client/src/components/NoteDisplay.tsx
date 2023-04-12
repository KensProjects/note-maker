import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { INote } from "../config/note_interface";

import { BASE_URL } from "../config/base_url";

import axios from "axios";

import Spinner from "./Spinner";
import Note from "./Note";

export default function NoteDisplay() {
  const navigate = useNavigate();

  const [noteArray, setNoteArray] = useState<INote[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteNote(id: string) {
    try {
      setIsLoading(true);
      const res = await axios.delete(`${BASE_URL}/delete/${id}`, {
        withCredentials: true,
      });
      setNoteArray((notes) =>
        notes.filter((note) => note._id !== res.data._id)
      );
      getNotes();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }
  function getNotes() {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get(`${BASE_URL}`, {
        signal,
        withCredentials: true,
      })
      .then((res) => setNoteArray(res.data))
      .catch(() => navigate("/login"));

    return () => {
      controller.abort();
    };
  }

  useEffect(() => {
    getNotes();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div
      id="note-array-wrapper"
      className="w-screen px-4 pt-8 justify-center items-center flex"
    >
      <div
        id="note-array-list"
        className="grid grid-cols-1 justify-center text-center gap-8"
      >
        {noteArray.map((note) => {
          return (
            <div
              key={note._id}
              className="flex justify-center items-center w-fit text-center"
            >
              <Note
                createdAt={note.createdAt}
                label={note.label}
                note={note.note}
                onDelete={() => handleDeleteNote(note._id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
