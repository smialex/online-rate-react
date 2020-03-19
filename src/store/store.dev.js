import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    devTools: {},
    preloadedState,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureAppStore;