import update from "immutability-helper";
import { connect } from "react-redux";
import { applyScope } from "./utils";

const scope = "home";

const initialState = {
    caurosalData: [],
    covidStats: [],
    appeals: [],
    selAppeal: null,
  };
  
export const types = applyScope(scope, ["SET_CAUROSAL", "SET_STATS", "SET_APPEALS", "SET_SEL_APPEAL"]);

const homeContentReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.SET_CAUROSAL:
        return update(state, {
          caurosalData: { $set: action.caurosalData }
        });
      case types.SET_STATS:
        return update(state, {
            covidStats: { $set: action.covidStats }
        });
      case types.SET_APPEALS:
        return update(state, {
            appeals: { $set: action.appeals }
        });
      case types.SET_SEL_APPEAL: 
        return update(state, {
          selAppeal: { $set: action.selAppeal }
      });
    }
    return state;
  };

// dispatch actions
const mapDispatchToProps = (dispatch) => ({
    setCaurosalData: (caurosalData) =>
      dispatch({
        type: types.SET_CAUROSAL,
        caurosalData
      }),
    setStats: (covidStats) =>
      dispatch({
        type: types.SET_STATS,
        covidStats
      }),
    setAppeals: (appeals) =>
      dispatch({
        type: types.SET_APPEALS,
        appeals
      }),
    setSelAppeals: (selAppeal) =>
      dispatch({
        type: types.SET_SEL_APPEAL,
        selAppeal
      })
  });
  

  const mapStateToProps = (state) => state.home;

  export const connector = (vs) =>
    connect(mapStateToProps, mapDispatchToProps)(vs);

export default homeContentReducer;