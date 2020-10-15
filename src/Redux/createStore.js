import { createStore, applyMiddleware } from "redux";
import createSagaMiddlewear from "redux-saga";
import { logger } from "redux-logger";
import rootReducer from "./rootReducers";
import rootSagas from "./rootSagas";

export const sagaMiddleware = createSagaMiddlewear();

const middlewares = [sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSagas);

export default store;
