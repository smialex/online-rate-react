import { fork } from 'redux-saga/effects';
import { ratesSaga } from './features/rates';

export function* rootSaga() {
  yield fork(ratesSaga);
}