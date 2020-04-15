import update from "immutability-helper";
import { connect } from "react-redux";
import { applyScope } from "./utils";
import { createSelector } from "reselect";
import parseData from "@utils/Parser";
import { pageSelector } from "./selectors";

const scope = "home";

const initialState = {
  caurosalData: [],
  covidStats: [],
  appeals: [],
  selAppeal: null,
};

export const types = applyScope(scope, [
  "SET_CAUROSAL",
  "SET_STATS",
  "SET_APPEALS",
  "SET_SEL_APPEAL",
  "FETCH_APPEALS",
]);

const homeContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CAUROSAL:
      return update(state, {
        caurosalData: { $set: action.caurosalData },
      });
    case types.SET_STATS:
      return update(state, {
        covidStats: { $set: action.covidStats },
      });
    case types.SET_APPEALS:
      return update(state, {
        appeals: { $set: action.appeals },
      });
    case types.SET_SEL_APPEAL:
      return update(state, {
        selAppeal: { $set: action.selAppeal },
      });
  }
  return state;
};

// dispatch actions
const mapDispatchToProps = (dispatch) => ({
  setCaurosalData: (caurosalData) =>
    dispatch({
      type: types.SET_CAUROSAL,
      caurosalData,
    }),
  setStats: (covidStats) =>
    dispatch({
      type: types.SET_STATS,
      covidStats,
    }),
  setAppeals: (appeals) =>
    dispatch({
      type: types.SET_APPEALS,
      appeals,
    }),
  setSelAppeals: (selAppeal) =>
    dispatch({
      type: types.SET_SEL_APPEAL,
      selAppeal,
    }),
  fetchAppeals: () =>
    dispatch({
      type: types.FETCH_APPEALS,
    }),
});

// parsed appeals selector
const getResult = (state) => state[scope].appeals;
export const parsedResultSelector = createSelector([getResult], (appeals) => {
  const parsedResult = parseData(appeals);
  return parsedResult;
});

// state from root state
const mapStateToProps = pageSelector(scope, { appeals: parsedResultSelector });

export const connector = (vs) =>
  connect(mapStateToProps, mapDispatchToProps)(vs);

export default homeContentReducer;
