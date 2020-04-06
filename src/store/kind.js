import update from "immutability-helper";
import { connect } from "react-redux";
import { applyScope } from "./utils";
import { pageSelector } from "./selectors";
import { createSelector } from "reselect";

const scope = "kind";

const initialState = {
  mode: "organization",
  reset: 1,
};

export const types = applyScope(scope, ["SET_MODE", "SET_RESET", "SAVE"]);

const kindReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MODE:
      return update(state, {
        mode: { $set: action.mode },
      });
    case types.SET_RESET:
      return update(state, {
        reset: { $set: state.reset + 1 },
      });
  }
  return state;
};

// dispatch actions
const mapDispatchToProps = (dispatch) => ({
  setMode: (mode) =>
    dispatch({
      type: types.SET_MODE,
      mode,
    }),
  setReset: () =>
    dispatch({
      type: types.SET_RESET,
    }),
  save: (formData) =>
    dispatch({
      type: types.SAVE,
      formData,
    }),
});

const getSelectedAppeal = (state) => state.home.selAppeal;
const getAppeals = (state) => state.home.appeals;

export const selAppealSelector = createSelector(
  [getAppeals, getSelectedAppeal],
  (appeals, id) => appeals.find((r) => r._id == id)
);

// state from root state
const mapStateToProps = pageSelector(scope, { appeal: selAppealSelector });

// connect
export const connecter = (vs) =>
  connect(mapStateToProps, mapDispatchToProps)(vs);

export default kindReducer;
