// this file is updated from store/kindReport

import { connect } from "react-redux";
import { applyScope } from "./utils";
import { pageSelector } from "./selectors";

import {
  generateReportDispatcher,
  generateReportReducer,
} from "./helpers/reducer";
import { generateResultSelector } from "./helpers/selector";
import { reportTypes } from "./helpers/types";
import { reportInitState } from "./helpers/initialState";

const scope = "searchWithMobile";

const initialState = reportInitState;

export const types = applyScope(scope, reportTypes);

// reducer actions, pass callback function for custom actions
const searchWithMobileReducer = generateReportReducer(types, initialState);

// dispatch actions, pass custom actions if any
const mapDispatchToProps = generateReportDispatcher(types);

// state with selectors
const mapStateToProps = pageSelector(scope, {
  result: generateResultSelector(scope),
});

// connect
export const connecter = (Report) =>
  connect(mapStateToProps, mapDispatchToProps)(Report);

export default searchWithMobileReducer;
