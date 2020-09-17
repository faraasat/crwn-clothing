import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>  {/* This BrowserRouter gives functionality of routing */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
