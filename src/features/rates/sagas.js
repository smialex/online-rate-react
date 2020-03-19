import { call, put, delay, select } from 'redux-saga/effects';
import { fetchRatesUsdEur } from '../../libs/api/ratesApi';
import { ratesAddRate } from './model';
import { ratesIntervalSelect } from './selectors';

export function* ratesSaga() {
  while (true) {
    try {
      const state = yield select();
      const interval = ratesIntervalSelect(state);
      const time = new Date().getTime();

      const [usd, eur] = yield call(fetchRatesUsdEur);
      yield put(ratesAddRate({
        usd,
        eur,
        time
      }));
      yield delay(interval * 1000);
    }
    catch (error) {
    }
  }
}