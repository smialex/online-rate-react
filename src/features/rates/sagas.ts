import { call, put, delay, select } from "redux-saga/effects";
import { fetchRatesUsdEur } from "./api";
import { ratesAddRate } from "./ducks";
import { ratesIntervalSelect } from "./selectors";

export function* ratesSaga() {
  while (true) {
    try {
      const interval = ratesIntervalSelect(yield select());
      const time = new Date().getTime();

      const [usd, eur]: [number, number] = yield call(fetchRatesUsdEur);
      yield put(ratesAddRate(usd, eur, time));
      yield delay(interval * 1000);
    } catch (error) {}
  }
}
