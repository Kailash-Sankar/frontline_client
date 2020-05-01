import update from "immutability-helper";
import { applyScope } from "./utils";
import { connect } from "react-redux";

const initialState = {
  volunteerCount: {},
  loggedIn: false,
  user: { name: "", email: "" }
};

const scope = "common";

export const types = applyScope(scope, [
  "SET_COUNT",
  "SET_AUTH",
  "LOGIN",
  "SET_USER",
  "LOGOUT"
]);

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COUNT:
      return update(state, {
        volunteerCount: { $set: action.volunteerCount }
      });
    case types.SET_AUTH:
      return update(state, {
        loggedIn: { $set: action.loggedIn }
      });
    case types.SET_USER:
      return update(state, {
        user: { $set: action.user }
      });
  }
  return state;
};

// dispatch actions
const mapDispatchToProps = (dispatch) => ({
  setCount: (count) =>
    dispatch({
      type: types.SET_COUNT,
      count
    }),
  setAuth: (loggedIn) =>
    dispatch({
      type: types.SET_AUTH,
      loggedIn
    }),
  login: (formData) => dispatch({ type: types.LOGIN, formData }),
  logout: () => dispatch({ type: types.LOGOUT })
});

// common store connector
const mapStateToProps = (state) => state.common;

// connect
export const connecter = (page) =>
  connect(mapStateToProps, mapDispatchToProps)(page);

export default commonReducer;
