import React, { useState, useEffect, useContext } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import LandingPage from "../../Components/LandingPage";
import "./styles.scss";
import { useSelector } from "react-redux";
import NotesInput from "../../Components/Todo/NotesInput";
import NoteHeader from "../../Components/Todo/NoteHeader";
import { Link } from "react-router-dom";
import { DarkTheme } from "../../Context/theme";
const mapState = ({ user, notesData }) => ({
  currentUser: user.currentUser,
  notes: notesData.notes,
});
function MainLayout(props) {
  const { currentUser, notes } = useSelector(mapState);
  const darkTheme = useContext(DarkTheme);
  const { darkThemeActive } = darkTheme;
  const [noteData, setNoteData] = useState();
  const [filteredNotesByUser, setFilteredNotesByUser] = useState();

  useEffect(() => {
    const filterByCurrentUser = notes.filter((note) => note.noteUserUID === currentUser.id);
    setFilteredNotesByUser(filterByCurrentUser);
    if (noteData === undefined) {
      return setNoteData(filterByCurrentUser[0]);
    }
  }, [notes]);

  return (
    <div className="mainlayout">
      <div>
        <Header />
      </div>
      {currentUser === null && (
        <LandingPage>
          <div className="pageLinks">
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        </LandingPage>
      )}
      {currentUser && (
        <div className="mainLayout-flex">
          <Sidebar setNoteData={setNoteData} />
          {notes && (
            <div
              className="notes-display"
              style={{
                backgroundColor: darkThemeActive ? "#243447" : "white",
                color: darkThemeActive ? "white" : "black",
              }}
            >
              <NoteHeader noteData={noteData} filteredNotesByUser={filteredNotesByUser} />
              <NotesInput noteData={noteData} filteredNotesByUser={filteredNotesByUser} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MainLayout;
