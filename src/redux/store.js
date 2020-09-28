import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { logger } from "redux-logger"; // it is a middleware which logs outputs
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk]; // We will put our middlewares in an array and use it with ... to make it scalable

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
