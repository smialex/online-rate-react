const ratesReducerSelect = (state) => state.ratesReducer;

export const ratesIntervalSelect = (state) => ratesReducerSelect(state).settings.interval;
export const ratesDataSelect = (state) => ratesReducerSelect(state).rates;
