import { createSelector } from "reselect";

// global selector
const selector = (state) => state;

// page scope selector
const genScopeSelector = (scope) => {
  return createSelector([selector], (state) => state[scope]);
};

// generates a selector for each page
// selectors is an object
// - key will become the result key
// - value has to be a selector
export const pageSelector = (scope, selectors = {}) => {
  const scopeSelector = genScopeSelector(scope);
  const keys = Object.keys(selectors);

  return createSelector(
    [scopeSelector, ...keys.map((k) => selectors[k])],
    (scopedState, ...args) => {
      // build selector result set
      const argMap = {};
      args.forEach((r, i) => {
        argMap[keys[i]] = r;
      });

      return {
        ...scopedState,
        ...argMap,
      };
    }
  );
};
