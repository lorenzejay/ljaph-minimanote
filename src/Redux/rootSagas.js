import { all, call } from "redux-saga/effects";
import userSagas from "./User/user.Sagas";
import notesSagas from "./Notes/notes.Sagas";

export default function* rootSagas() {
  yield all([call(userSagas), call(notesSagas)]);
}
