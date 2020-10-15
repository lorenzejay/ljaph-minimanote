import notesTypes from "./notes.Types";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  handleAddHeader,
  handleAddNewContent,
  handleAddNewNote,
  handleDeleteNote,
  handleFetchNotes,
} from "./notes.Helper";
import { auth } from "./../../firebase/utils";
import { fetchNotesStart, setNotes } from "./notes.Action";

//adding notes to the db
export function* addNewNote({ payload: { noteTitle } }) {
  try {
    const timeStamp = new Date();
    yield handleAddNewNote({
      noteTitle,
      createdDate: timeStamp,
      noteUserUID: auth.currentUser.uid,
      noteContent: "",
      noteHeader: "",
    });
    yield put(fetchNotesStart());
  } catch (err) {
    console.log(err);
  }
}

export function* onCreateNoteStart() {
  yield takeLatest(notesTypes.ADD_NEW_NOTE_START, addNewNote);
}

//showing the notes
export function* fetchNotes() {
  //from helper function
  try {
    const notes = yield handleFetchNotes();
    yield put(setNotes(notes));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchNotesStart() {
  yield takeLatest(notesTypes.FETCH_NOTES_START, fetchNotes);
}

export function* addNoteContent({ payload: { text, documentID } }) {
  try {
    yield handleAddNewContent(text, documentID);
    yield put(fetchNotesStart());
  } catch (err) {
    console.log(err);
  }
}

export function* onAddNoteContentStart() {
  yield takeLatest(notesTypes.ADD_NOTE_CONTENT_START, addNoteContent);
}

export function* deleteNote({ payload }) {
  try {
    yield handleDeleteNote(payload);
    yield put(fetchNotesStart());
  } catch (err) {
    console.log(err);
  }
}

export function* onDeleteNoteStart() {
  yield takeLatest(notesTypes.DELETE_NOTES_START, deleteNote);
}

export function* addHeaderImg({ payload: { documentID, url } }) {
  try {
    yield handleAddHeader(documentID, url);
    yield put(fetchNotesStart());
  } catch (err) {
    console.log(err);
  }
}

export function* onAddHeaderImgStart() {
  yield takeLatest(notesTypes.ADD_HEADER_IMG_START, addHeaderImg);
}

export default function* notesSagas() {
  yield all([
    call(onCreateNoteStart),
    call(onFetchNotesStart),
    call(onAddNoteContentStart),
    call(onDeleteNoteStart),
    call(onAddHeaderImgStart),
  ]);
}
