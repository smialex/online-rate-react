import { createStore, applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer, { RootState } from "../reducers";
import { rootSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const configureStoreDev = (preloadedState?: RootState) =>
  configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    devTools: {},
    preloadedState
  });

const configureStoreProd = (preloadedState?: RootState) =>
  createStore(rootReducer, preloadedState, applyMiddleware(sagaMiddleware));

const configureAppStore = (preloadedState?: RootState) => {
  const store =
    process.env.NODE_ENV !== "production"
      ? configureStoreDev(preloadedState)
      : configureStoreProd(preloadedState);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer));
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureAppStore;
