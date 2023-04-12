import { useState } from "react";

import NoteDisplay from "../components/NoteDisplay";

import NoteForm from "../components/NoteForm";

import ToggleButton from "../components/ToggleButton";

export default function Dashboard() {
  const [toggleDisplay, setToggleDisplay] = useState(true);

  function showComponent() {
    setToggleDisplay((prev) => !prev);
  }

  return (
    <div
      id="tab-selector"
      className="flex flex-col justify-center items-center pt-8"
    >
      {toggleDisplay ? (
        <div className="flex flex-col justify-center items-center">
          <ToggleButton text="Create Note" onClick={showComponent}/>
          <NoteDisplay />
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center">
          <ToggleButton text="Show Notes" onClick={showComponent}/>
          <NoteForm />
        </div>
      )}
    </div>
  );
}
