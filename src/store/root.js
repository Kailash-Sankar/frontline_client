import { combineReducers, createStore, applyMiddleware } from "redux";
import commonReducer from "./common";
import reportReducer from "./report";
import volunteerSingupReducer from "./volunteerSignup";
import homeContentReducer from "./homeContent";
import createSagaMiddleware from "redux-saga";
import { initSaga } from "./sagas";
import kindReducer from "./kind";
import kindReportReducer from "./kindReport";
import appealReducer from "./appeal";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  common: commonReducer,
  report: reportReducer,
  volunteerSingup: volunteerSingupReducer,
  kind: kindReducer,
  kindReport: kindReportReducer,
  home: homeContentReducer,
  appeal: appealReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

window.store = store;

sagaMiddleware.run(initSaga);

export default store;
