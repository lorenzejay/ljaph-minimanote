import React, { useState, useEffect } from "react";
import DefaultImage3 from "../../Images/stephan-seeber-PzqrVrfjasc-unsplash.jpg";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addHeaderImgStart, fetchNotesStart } from "../../../Redux/Notes/notes.Action";
import { projectStorage } from "../../../firebase/utils";
import { FaUpload } from "react-icons/fa";

function NoteHeader({ noteData, filteredNotesByUser }) {
  const dispatch = useDispatch();
  const [headerURL, setHeaderURL] = useState();
  const types = ["image/png", "image/jpeg"];

  const handleHeader = (e) => {
    const selectedFile = e.target.files[0]; //gets the data from the file

    if (selectedFile && types.includes(selectedFile.type)) {
      const { documentID } = noteData;
      const storageRef = projectStorage.ref(`headerImages/${selectedFile.name}`).put(selectedFile);
      storageRef.on(
        "state_changed",
        (snapshot) => {},
        (err) => console.log(err),
        () => {
          projectStorage
            .ref("headerImages")
            .child(selectedFile.name)
            .getDownloadURL()
            .then((url) => {
              setHeaderURL(url);
              dispatch(addHeaderImgStart({ documentID, url }));
            })
            .catch((err) => console.log(err));
        }
      );
    }
  };
  console.log("filteredNotesByUser", filteredNotesByUser);

  // we need to pass in the file over to firestorage
  const headerImageMap =
    noteData &&
    filteredNotesByUser.map((note, i) => {
      if (noteData.documentID === note.documentID) {
        return (
          <div key={i}>
            <div
              className="header-image"
              style={{
                backgroundImage:
                  note.noteHeader === ""
                    ? `url(${DefaultImage3})`
                    : `url(${note.noteHeader || headerURL})`,
              }}
            >
              <input
                type="file"
                title="Change Cover"
                name="file"
                onChange={handleHeader}
                id="file"
                className="inputfile"
              />
              <label htmlFor="file">
                <span>
                  <FaUpload /> Change Header
                </span>
              </label>
            </div>
          </div>
        );
      }
    });

  return <header className="note-header">{headerImageMap}</header>;
}

export default NoteHeader;
