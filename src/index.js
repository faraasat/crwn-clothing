import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* It is used in redux and it is a parent of all things and alows us to get access to all the things related to store */}
      <BrowserRouter>
        {/* This BrowserRouter gives functionality of routing */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
