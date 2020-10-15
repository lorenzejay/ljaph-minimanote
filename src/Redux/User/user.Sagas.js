import { all, call, put, takeLatest } from "redux-saga/effects";
import { signInSuccess, signOutUserSuccess, userError } from "./user.Actions";
import { handleUserProfile, auth, getCurrentUser, GoogleProvider } from "../../firebase/utils";
import userTypes from "./userTypes";

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield handleUserProfile({ userAuth: user, additionalData });
    const snapshot = yield userRef.get();

    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export function* signInUser({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(userError(err.message));
  }
}

export function* onEmailSignInSuccess() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInUser);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    console.log(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutUserSuccess());
  } catch (err) {
    yield put(userError(err.message));
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({ payload: { displayName, email, password, confirmPassword } }) {
  if (password !== confirmPassword) {
    yield put(userError("Passwords do not match"));
    return;
  }
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additonalData = { displayName };
    yield getSnapshotFromUserAuth(user, additonalData); //we passsed in displayName
  } catch (err) {
    yield put(userError(err.message));
  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(userError(err.message));
  }
}

export function* onSignInWithGoogleStart() {
  yield takeLatest(userTypes.SIGN_IN_WITH_GOOGLE_START, googleSignIn);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInSuccess),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(onSignInWithGoogleStart),
  ]);
}
