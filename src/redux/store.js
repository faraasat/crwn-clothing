import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';  // it is a middleware which logs outputs

import rootReducer from './root-reducer';

const middlewares = [logger];  // We will put our middlewares in an array and use it with ... to make it scalable
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;