import { combineReducers } from "redux";
import { ratesReducer } from "./features/rates";

const rootReducer = combineReducers({
  ratesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
