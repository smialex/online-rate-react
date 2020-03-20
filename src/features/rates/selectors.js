import { createSelector } from '@reduxjs/toolkit';

const ratesReducerSelect = (state) => state.ratesReducer;

export const ratesIntervalSelect = (state) => ratesReducerSelect(state).settings.interval;
export const ratesMaxRowsSelect = (state) => ratesReducerSelect(state).settings.maxRows;
export const ratesDataSelect = (state) => ratesReducerSelect(state).rates;

export const ratesDataLimitedSelect = createSelector(
  ratesMaxRowsSelect,
  ratesDataSelect,
  (maxRows, rates) => rates.slice(-maxRows)
);