import userTypes from "./userTypes";

export const emailSignInStart = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});
export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (userCredentials) => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredentials,
});

export const resetUserState = () => ({
  type: userTypes.RESET_USER_STATE,
});

export const userError = (error) => ({
  type: userTypes.USER_ERROR,
  payload: error,
});

export const signInWithGoogleStart = () => ({
  type: userTypes.SIGN_IN_WITH_GOOGLE_START,
});
