import { combineReducers, createStore, applyMiddleware } from "redux";
import commonReducer from "./common";
import reportReducer from "./report";
import volunteerSingupReducer from "./volunteerSignup";
import ngoSignupReducer from "./ngoSignup";
import homeContentReducer from "./homeContent";
import createSagaMiddleware from "redux-saga";
import { initSaga } from "./sagas";
import kindReducer from "./kind";
import kindReportReducer from "./kindReport";
import requestReportReducer from "./requestReport";
import appealReducer from "./appeal";
import appealReportReducer from "./appealReport";
import requestForHelpReducer from "./requestForHelp";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  common: commonReducer,
  report: reportReducer,
  volunteerSingup: volunteerSingupReducer,
  ngoSignup: ngoSignupReducer,
  kind: kindReducer,
  kindReport: kindReportReducer,
  home: homeContentReducer,
  appeal: appealReducer,
  appealReport: appealReportReducer,
  requestReport: requestReportReducer,
  requestForHelp: requestForHelpReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

window.store = store;

sagaMiddleware.run(initSaga);

export default store;
