import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const ratesSlice = createSlice({
  name: 'features/rates',
  initialState: [],
  reducers: {
    ratesAddRate(state, action) {
      const { usd, eur, time } = action.payload;
      state.push({
        usd,
        eur,
        time
      });
    },
    ratesResetRates: () => []
  }
});


const settingsSlice = createSlice({
  name: 'features/rates',
  initialState: {
    interval: 2,
    maxRows: 10,
  },
  reducers: {
    ratesSetInterval: (state, interval) => state.interval = interval,
    ratesSetMaxRows: (state, maxRows) => state.maxRows = maxRows,
  }
});

export const { ratesAddRate, ratesResetRates } = ratesSlice.actions;
export const { ratesSetInterval, ratesSetMaxRows } = settingsSlice.actions;
export const ratesReducer = combineReducers({
  rates: ratesSlice.reducer,
  settings: settingsSlice.reducer
});
