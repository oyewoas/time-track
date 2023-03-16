import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_WORKERS_REQUEST, fetchWorkersSuccess, fetchWorkersFailure } from './actions';
import { getWorkers } from '../api';

function* fetchWorkers() {
  try {
    const workers = yield call(getWorkers);
    yield put(fetchWorkersSuccess(workers));
  } catch (error) {
    yield put(fetchWorkersFailure(error.message));
  }
}

export function* workersSaga() {
  yield takeLatest(FETCH_WORKERS_REQUEST, fetchWorkers);
}
