import notesTypes from "./notes.Types";

const INITIAL_STATE = {
  notes: [],
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case notesTypes.SET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
