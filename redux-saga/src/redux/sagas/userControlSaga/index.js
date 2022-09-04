import { takeEvery, apply, put } from "redux-saga/effects";
import {
  DOWNLOAD_ALL_USERS_REQUEST,
  DOWNLOAD_USERS_URL,
  DELETE_USER_REQUEST,
  DELETE_USER_URL,
} from "../../../constants/index";
import { httpRequest } from "../../../utils/httpRequest";

import {
  LOAD_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
} from "../../reducers/usersListReducer.js/usersListAction";

export function* loadUserList() {
  const req = yield httpRequest(DOWNLOAD_USERS_URL, "GET");
  if (req.status === 200) {
    const data = yield apply(req, req.json);
    yield put({
      type: LOAD_USERS_SUCCESS,
      payload: data,
    });
  }
}

export function* deleteUser({ payload }) {
  const req = yield httpRequest(
    DELETE_USER_URL + payload,
    "DELETE",
    DELETE_USER_SUCCESS
  );
  if (req.status === 200) {
    yield put({
      type: DELETE_USER_SUCCESS,
      payload: payload,
    });
  }
}

export default function* userControlSaga() {
  yield takeEvery(DOWNLOAD_ALL_USERS_REQUEST, loadUserList);
  yield takeEvery(DELETE_USER_REQUEST, deleteUser);
}
