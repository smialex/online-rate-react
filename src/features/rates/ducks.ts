import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

type RatesSliceState = { usd: number; eur: number; time: number }[];
const ratesSliceInitialState: RatesSliceState = [];

const ratesSlice = createSlice({
  name: "features/rates",
  initialState: ratesSliceInitialState,
  reducers: {
    ratesAddRate: {
      reducer(
        state,
        action: PayloadAction<{ usd: number; eur: number; time: number }>
      ) {
        const { usd, eur, time } = action.payload;
        state.push({
          usd,
          eur,
          time
        });
      },
      prepare(usd: number, eur: number, time: number) {
        return {
          payload: {
            usd,
            eur,
            time
          }
        };
      }
    },
    ratesResetRates: () => []
  }
});

const settingsSlice = createSlice({
  name: "features/rates",
  initialState: {
    interval: 2,
    maxRows: 10
  },
  reducers: {
    ratesSetInterval: (state, action: PayloadAction<number>) => ({
      ...state,
      interval: action.payload
    }),
    ratesSetMaxRows: (state, action: PayloadAction<number>) => ({
      ...state,
      maxRows: action.payload
    })
  }
});

export const { ratesAddRate, ratesResetRates } = ratesSlice.actions;
export const { ratesSetInterval, ratesSetMaxRows } = settingsSlice.actions;
export const ratesReducer = combineReducers({
  rates: ratesSlice.reducer,
  settings: settingsSlice.reducer
});
export type RatesState = ReturnType<typeof ratesReducer>;
