import update from "immutability-helper";
import { connect } from "react-redux";
import { applyScope } from "./utils";
import { pageSelector } from "./selectors";

const scope = "requestForHelp";

const initialState = {
  reset: 1,
};

export const types = applyScope(scope, ["SET_RESET", "SAVE"]);

const requestForHelpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RESET:
      return update(state, {
        reset: { $set: state.reset + 1 },
      });
  }
  return state;
};

// dispatch actions
const mapDispatchToProps = (dispatch) => ({
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

// state from root state
const mapStateToProps = pageSelector(scope);

// connect
export const connector = (vs) =>
  connect(mapStateToProps, mapDispatchToProps)(vs);

export default requestForHelpReducer;
