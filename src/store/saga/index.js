import {all,takeLatest} from "redux-saga/effects"
import { watchUserFetch } from "./userSaga/userSaga";
function* watchUserSaga() {
    yield takeLatest('users/getUserFetch', watchUserFetch);
}

export default function* rootSaga() {
    yield all([watchUserSaga()]);
  }