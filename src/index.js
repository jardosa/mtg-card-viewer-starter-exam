import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import { GlobalState } from "./context/GlobalState.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GlobalState>
    <App />
  </GlobalState>,
  rootElement
);
