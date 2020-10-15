import React, { useEffect, useState, useContext } from "react";
import "./styles.scss";
import Button from "../../Form/Button/index";
import { useDispatch } from "react-redux";
import {
  addNoteContentStart,
  deleteNotesStart,
  fetchNotesStart,
} from "./../../../Redux/Notes/notes.Action";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../../../utils";
import { FaEllipsisH, FaTrash } from "react-icons/fa";
import Modal from "../../Modal/index";
import LandingPage from "../../LandingPage";
import { DarkTheme } from "../../../Context/theme";

function NotesInput({ noteData, filteredNotesByUser }) {
  const darkTheme = useContext(DarkTheme);
  const { darkThemeActive } = darkTheme;
  const dispatch = useDispatch();
  const [closeModal, setCloseModal] = useState();
  const [text, setText] = useState({
    blocks: [
      {
        type: "header",
        data: {
          text: "Enter Title Here",
          level: "2",
        },
      },
      {
        type: "paragraph",
        data: {
          text: `Don't forget to save your notes.`,
        },
      },
    ],
  });
  const [defaultText] = useState({
    blocks: [
      {
        type: "header",
        data: {
          text: "Enter Title Here",
          level: "2",
        },
      },
      {
        type: "paragraph",
        data: {
          text: `Don't forget to save your notes.`,
        },
      },
    ],
  });

  useEffect(() => {
    dispatch(fetchNotesStart());
    setText(defaultText);
  }, []);

  const saveNote = () => {
    const { documentID } = noteData;
    dispatch(addNoteContentStart({ text, documentID }));
    setCloseModal(true);
  };

  const deleteNote = () => {
    const { documentID } = noteData;
    dispatch(deleteNotesStart(documentID));
  };
  //

  const notesMap =
    filteredNotesByUser &&
    filteredNotesByUser.map((note, i) => {
      // console.log(noteData.documentID); //note.documentID returns the documentID, now we need the currentDOCID
      if (note.documentID === noteData.documentID) {
        return (
          <Editor
            autofocus={true}
            key={i}
            tools={EDITOR_JS_TOOLS}
            onReady={() => console.log("ready")}
            data={note.noteContent === "" ? defaultText : note.noteContent}
            onData={(e) => setText(e)}
          />
        );
      }
    });

  return (
    <div className="note-inputs">
      <div>
        {filteredNotesByUser && filteredNotesByUser.length !== 0 && (
          <div className="note-title-btn">
            <Button handleClick={saveNote} bgColor={darkThemeActive ? "#ffa48e" : "#333333"}>
              Save
            </Button>
            <div>
              <Modal
                openModal={
                  <span>
                    <FaEllipsisH style={{ cursor: "pointer" }} />
                  </span>
                }
                modalTitle="Options"
                closeModal={closeModal}
              >
                <div className="note-modal-icons">
                  <FaTrash size="25px" style={{ cursor: "pointer" }} onClick={deleteNote} />
                  Delete
                </div>
              </Modal>
            </div>
          </div>
        )}
      </div>

      <div id="editor-container">
        {filteredNotesByUser && filteredNotesByUser.length !== 0 ? (
          notesMap
        ) : (
          <LandingPage>
            <div
              className="landing-page-p"
              style={{
                textAlign: "left",
                marginTop: "4vh",
                backgroundColor: darkThemeActive ? "white" : "white",
              }}
            >
              <ul style={{ color: darkThemeActive ? "black" : "black" }}>
                <li>
                  <p>Begin by clicking on Notebook and entering the notebook title.</p>
                </li>
                <li>
                  <p>You can choose an image for your note header.</p>
                </li>
                <li>
                  <p>Start by clicking on the default note and begin typing away.</p>
                </li>
              </ul>
            </div>
          </LandingPage>
        )}
      </div>
    </div>
  );
}

export default NotesInput;
