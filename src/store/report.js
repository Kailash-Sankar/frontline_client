import update from "immutability-helper";
import { connect } from "react-redux";
import { applyScope } from "./utils";
import { pageSelector } from "./selectors";

const scope = "report";

const initialState = {
  result: [],
  mode: undefined,
  region: ["KA", "5"]
};

export const types = applyScope(scope, [
  "SET_RESULT",
  "SEARCH",
  "SET_MODE",
  "SET_REGION"
]);

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RESULT:
      return update(state, {
        result: { $set: action.result }
      });
    case types.SET_MODE:
      return update(state, {
        mode: { $set: action.mode }
      });
    case types.SET_REGION:
      return update(state, {
        region: { $set: action.region }
      });
  }
  return state;
};

// dispatch actions
const mapDispatchToProps = (dispatch) => ({
  setResult: (result) =>
    dispatch({
      type: types.SET_RESULT,
      result
    }),
  setMode: (mode) =>
    dispatch({
      type: types.SET_MODE,
      mode
    }),
  setRegion: (region) =>
    dispatch({
      type: types.SET_REGION,
      region
    }),
  search: (params) =>
    dispatch({
      type: types.SEARCH,
      params
    })
});

// state from root state
const mapStateToProps = pageSelector(scope);

// connect
export const connecter = (Report) =>
  connect(mapStateToProps, mapDispatchToProps)(Report);

export default reportReducer;
