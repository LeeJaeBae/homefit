import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

// createStore, rootReducer, Provider
import { createStore } from "redux";
import rootReducer from "./Store/modules";
import { Provider } from "react-redux";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
