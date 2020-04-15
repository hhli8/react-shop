import { put, all } from 'redux-saga/effects';
import {delay} from "redux-saga";

export function* fetchUser() {
  yield delay(1000);
  yield put({ type: 'GET_USER' })
}

export function* fetchProject() {
  yield delay(1000);
  yield put({ type: 'GET_PROJECT' })
}

export default function * rootSaga() {
  yield all([
    fetchUser,
    fetchProject
  ]);
}