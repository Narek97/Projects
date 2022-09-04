import { auth } from "../../firebase";
import * as types from "../actionTypes";

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const loadingStart = () => ({
  type: types.LOADING_START,
});

export const loadingEnd = () => ({
  type: types.LOADING_END,
});

export const registerInitial = (email, password, userName) => {
  return function (dispatch) {
    dispatch(loadingStart);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: userName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
};

export const loginInitial = (email, password) => {
  return function (dispatch) {
    dispatch(loadingStart);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginFail(error.message));
      });
  };
};

export const logoutInitial = () => {
  return function (dispatch) {
    dispatch(loadingStart);
    auth
      .signOut()
      .then((resp) => {
        dispatch(logoutSuccess(resp));
      })
      .catch((error) => {
        dispatch(logoutFail(error.message));
      });
  };
};
