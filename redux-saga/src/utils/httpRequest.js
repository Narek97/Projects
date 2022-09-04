import { call, put } from "redux-saga/effects";
import {
  START_LOADING,
  STOP_LOADING,
} from "../redux/reducers/userReducer/userActions";

export function* httpRequest(url, method = "GET", body = null) {
  if (body) {
    body = JSON.stringify(body);
  }
  try {
    yield put({
      type: START_LOADING,
    });
    const req = yield call(fetch, url, {
      method,
      body,
      headers: { "Content-Type": "application/json" },
    });
    yield put({
      type: STOP_LOADING,
    });
    console.log("httpRequest", req);
    return req;
  } catch (e) {
    console.error("HTTP ERROR httpRequest.js", e);
    yield put({
      type: STOP_LOADING,
    });
  }
}
