import { combineReducers, createStore, applyMiddleware } from "redux";
import commonReducer from "./common";
import reportReducer from "./report";
import volunteerSingupReducer from "./volunteerSignup";
import createSagaMiddleware from "redux-saga";
import { initSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  common: commonReducer,
  report: reportReducer,
  volunteerSingup: volunteerSingupReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

window.store = store;

sagaMiddleware.run(initSaga);

export default store;
