import { createSelector } from "@reduxjs/toolkit";
import { RatesState } from "./ducks";

const ratesReducerSelect = (state: any): RatesState => state.ratesReducer;

export const ratesIntervalSelect = (state: any) =>
  ratesReducerSelect(state).settings.interval;

export const ratesMaxRowsSelect = (state: any) =>
  ratesReducerSelect(state).settings.maxRows;

export const ratesDataSelect = (state: any) => ratesReducerSelect(state).rates;

export const ratesDataLimitedSelect = createSelector(
  ratesMaxRowsSelect,
  ratesDataSelect,
  (maxRows, rates) => rates.slice(-maxRows)
);
