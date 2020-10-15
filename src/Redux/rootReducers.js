import { combineReducers } from "redux";
import userReducer from "./User/user.Reducers";
import notesReducer from "./Notes/notes.Reducers";

export default combineReducers({
  user: userReducer,
  notesData: notesReducer,
});
