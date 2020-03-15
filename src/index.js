import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/balance";
import "bootstrap/dist/css/bootstrap.min.css";

let store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
