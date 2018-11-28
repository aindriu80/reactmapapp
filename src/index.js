import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { incrementNumber } from "./actions";
import rooterReducer from "./reducers";

const store = createStore(rooterReducer);

store.subscribe(() => console.log("store", store.getState()));

store.dispatch(incrementNumber(store.getState));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
