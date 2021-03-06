import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import "./index.css";
import * as serviceWorker from './serviceWorker';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* It is used in redux and it is a parent of all things and alows us to get access to all the things related to store */}
      <BrowserRouter>
        {/* This BrowserRouter gives functionality of routing */}
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();  // For using PWA
