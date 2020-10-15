import { firestore } from "./../../firebase/utils";

export const handleAddNewNote = (notes) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("notes")
      .doc()
      .set(notes)
      .then(() => resolve())
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchNotes = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("notes")
      .orderBy("createdDate")
      .get() // gets from this specific colleciton
      .then((snapshot) => {
        const notesArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(notesArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleAddNewContent = (notesData, documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("notes")
      .doc(documentID)
      .update({
        noteContent: notesData,
      })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const handleDeleteNote = (documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("notes")
      .doc(documentID)
      .delete()
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const handleAddHeader = (documentID, url) => {
  new Promise((resolve, reject) => {
    firestore
      .collection("notes")
      .doc(documentID)
      .update({
        noteHeader: url,
      })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};
