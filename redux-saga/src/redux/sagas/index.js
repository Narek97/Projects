import { all, spawn } from "redux-saga/effects";
import userControlSaga from "./userControlSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  const sagas = [userSaga, userControlSaga];
  yield all(sagas.map((state) => spawn(state)));
}
