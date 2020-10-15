import React, { useEffect, useState, useContext } from "react";
import SidebarComponents from "../SidebarContents";
import SidebarInput from "../SidebarInput";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { addNewNoteStart, fetchNotesStart } from "../../Redux/Notes/notes.Action";
import { FaBook } from "react-icons/fa";
import Button from "../Form/Button";
import Modal from "../Modal";
import { DarkTheme } from ".././../Context/theme";

const mapState = ({ user, notesData }) => ({
  notes: notesData.notes,
  currentUser: user.currentUser,
});

function Sidebar({ setNoteData }) {
  const darkTheme = useContext(DarkTheme);
  const { darkThemeActive } = darkTheme;
  const { currentUser, notes } = useSelector(mapState);
  const [noteTitle, setNoteTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotesStart());
  }, []);

  const handleNoteTitle = (note, documentID) => {
    setNoteData(note, documentID);
  };

  const createNewNote = () => {
    if (noteTitle === "") return;
    dispatch(addNewNoteStart({ noteTitle }));
    setNoteTitle("");
    const filterNote = notes.filter((note) => note.noteUserUID === currentUser.id);
    setNoteData(filterNote[filterNote.length - 1]);
  };

  //gets the notes titles from DB and adds it onto the sidebar
  const notesMapped = notes.map((note, i) => {
    if (note.noteUserUID === currentUser.id) {
      return (
        <li key={note.documentID} className="sidebar-note-titles">
          <span onClick={() => handleNoteTitle(note, note.documentID)}>{note.noteTitle}</span>
        </li>
      );
    }
  });

  //to filter the entire notes document and show only the notes this current user has made.
  useEffect(() => {
    const filterNote = notes.filter((note) => note.noteUserUID === currentUser.id);
    setNoteData(filterNote[0]);
  }, [setNoteData]);

  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: darkThemeActive ? "#ffa48e" : "#E1E8ED",
        color: darkThemeActive ? "white" : "black",
      }}
    >
      <SidebarComponents>
        <div className="sidebar-content-85">
          <h2 style={{ borderBottomColor: darkThemeActive ? "#E1E8ED" : "#333333" }}>
            {currentUser.displayName}
          </h2>
          {notes && notesMapped}
        </div>

        <div
          className="sidebar-modal"
          style={{ borderTopColor: darkThemeActive ? "#E1E8ED" : "#333333" }}
        >
          <Modal
            openModal={
              <div>
                <FaBook />
                <span>Notebook</span>
              </div>
            }
            modalTitle="Add Notebook"
          >
            <SidebarInput
              placeholder="Untitled"
              handleChange={(e) => setNoteTitle(e.target.value)}
              type="text"
              value={noteTitle}
            />
            <Button handleClick={createNewNote} bgColor={darkThemeActive ? "#ffa48e" : "#333333"}>
              Create Notebook
            </Button>
          </Modal>
        </div>
      </SidebarComponents>
    </div>
  );
}

export default Sidebar;
