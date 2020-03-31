import update from "immutability-helper";
import { applyScope } from "./utils";

const initialState = {
  volunteerCount: 0
};

const scope = "common";

export const types = applyScope(scope, ["SET_COUNT"]);

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COUNT:
      return update(state, {
        volunteerCount: { $set: action.volunteerCount }
      });
  }
  return state;
};

export default commonReducer;
