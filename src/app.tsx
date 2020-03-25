import React from "react";
import configureStore from "./store";
import { Provider } from "react-redux";
import { RatesView } from "./features/rates";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <RatesView />
      </div>
    </Provider>
  );
}

export default App;
