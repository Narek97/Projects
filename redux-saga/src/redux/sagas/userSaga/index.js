import { takeEvery, apply, put } from "redux-saga/effects";
import {
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_IN_SUCCESS,
  CHECK_USER_IN_SYSTEM_SUCCESS,
  USER_UPDATE_SETTINGS_SUCCESS,
  USER_LOGOUT_SUCCESS,
  REQUEST_ERROR,
} from "../../reducers/userReducer/userActions";
import {
  SIGN_UP_URL,
  SIGN_IN_URL,
  USER_LOGOUT_REQUEST,
  UPDATE_URL,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_IN_REQUEST,
  USER_UPDATE_SETTINGS_REQUEST,
  CHECK_USER_IN_SYSTEM_REQUEST,
  FIND_USER_BY_ID_URL,
  userLocalStorageData,
} from "../../../constants/index";

import { history } from "../../reducers/index";
import { httpRequest } from "../../../utils/httpRequest";

export function* signUp({ payload }) {
  const req = yield httpRequest(SIGN_UP_URL, "POST", payload);
  if (req.status === 200) {
    const data = yield apply(req, req.json);
    yield put({
      type: USER_SIGN_UP_SUCCESS,
      payload: data,
    });
    localStorage.setItem(userLocalStorageData, data.id);
    if (data.role === "admin") {
      history.push("/admin");
    } else {
      history.push("/home");
    }
  } else {
    yield put({
      type: REQUEST_ERROR,
      payload: "Email already exist",
    });
  }
}

export function* signIn({ payload }) {
  const req = yield httpRequest(SIGN_IN_URL, "POST", payload);

  if (req.status === 200) {
    const data = yield apply(req, req.json);
    yield put({
      type: USER_SIGN_IN_SUCCESS,
      payload: data,
    });
    localStorage.setItem(userLocalStorageData, data.id);
    if (data.role === "admin") {
      history.push("/admin");
    } else {
      history.push("/home");
    }
  } else {
    yield put({
      type: REQUEST_ERROR,
      payload: "Wrong email or password",
    });
  }
}

export function* logOut({ payload }) {
  // const req = yield httpRequest('USER_LOGOUT_URL', "POST", payload);
  yield put({
    type: USER_LOGOUT_SUCCESS,
  });
  localStorage.removeItem(userLocalStorageData);
  history.push("/signin");
}

export function* checkUserInSystem({ payload }) {
  const req = yield httpRequest(FIND_USER_BY_ID_URL + payload, "GET");
  if (req.status === 200) {
    const data = yield apply(req, req.json);
    yield put({
      type: CHECK_USER_IN_SYSTEM_SUCCESS,
      payload: data,
    });
  }
}

export function* updateSettings({ payload }) {
  const req = yield httpRequest(UPDATE_URL, "PUT", payload);
  if (req.status === 200) {
    const data = yield apply(req, req.json);
    yield put({
      type: USER_UPDATE_SETTINGS_SUCCESS,
      payload: data,
    });
  }
}

export default function* userSaga() {
  yield takeEvery(USER_SIGN_UP_REQUEST, signUp);
  yield takeEvery(USER_SIGN_IN_REQUEST, signIn);
  yield takeEvery(CHECK_USER_IN_SYSTEM_REQUEST, checkUserInSystem);
  yield takeEvery(USER_UPDATE_SETTINGS_REQUEST, updateSettings);
  yield takeEvery(USER_LOGOUT_REQUEST, logOut);
}
