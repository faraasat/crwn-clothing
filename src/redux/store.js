import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { logger } from "redux-logger"; // it is a middleware which logs outputs

import rootReducer from "./root-reducer";

const middlewares = [logger]; // We will put our middlewares in an array and use it with ... to make it scalable
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
