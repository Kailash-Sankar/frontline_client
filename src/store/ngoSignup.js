import update from "immutability-helper";
import { connect } from "react-redux";
import { applyScope } from "./utils";
import { pageSelector } from "./selectors";

const scope = "ngoSignup";

const initialState = {
  mode: "ngosignup",
  reset: 1,
};

export const types = applyScope(scope, ["SET_MODE", "SET_RESET", "SAVE"]);

const ngoSignupReducer = (state = initialState, action) => {
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

// state from root state
const mapStateToProps = pageSelector(scope);

// connect
export const connecter = (vs) =>
  connect(mapStateToProps, mapDispatchToProps)(vs);

export default ngoSignupReducer;
