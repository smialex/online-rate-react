import { combineReducers } from 'redux';
import { ratesReducer } from './features/rates';

const rootReducer = combineReducers({
  ratesReducer
});

export default rootReducer;