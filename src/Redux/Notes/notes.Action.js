import notesTypes from "./notes.Types";

export const addNewNoteStart = (noteData) => ({
  type: notesTypes.ADD_NEW_NOTE_START,
  payload: noteData,
});

//getting the notes we have from the specific doc collection
export const fetchNotesStart = () => ({
  type: notesTypes.FETCH_NOTES_START,
});

//setting the notes down so we can see them
export const setNotes = (notes) => ({
  type: notesTypes.SET_NOTES,
  payload: notes,
});

export const addNoteContentStart = (notesData) => ({
  type: notesTypes.ADD_NOTE_CONTENT_START,
  payload: notesData,
});

export const deleteNotesStart = (documentID) => ({
  type: notesTypes.DELETE_NOTES_START,
  payload: documentID,
});

export const addHeaderImgStart = (notesData) => ({
  type: notesTypes.ADD_HEADER_IMG_START,
  payload: notesData,
});
