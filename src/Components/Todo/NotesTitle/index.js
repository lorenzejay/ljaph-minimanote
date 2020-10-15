import React from "react";
import "./styles.scss";

function NotesTitle({ noteData }) {
  return (
    <div>
      <h1>{noteData && noteData.noteTitle}</h1>
    </div>
  );
}

export default NotesTitle;
