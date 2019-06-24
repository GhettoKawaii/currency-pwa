import { all } from "redux-saga/effects";
import getCoinsSaga from "./getCoinsSaga";
export default function* rootSaga() {
  yield all([getCoinsSaga()]);
}
