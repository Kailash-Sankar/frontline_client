import { createSelector } from "reselect";

const selector = (state) => state;
const getCount = (state) => state.common.volunteerCount;

const countSelector = createSelector([getCount], (count) => {
  return count;
});

const genScopeSelector = (scope) => {
  return createSelector([selector], (state) => state[scope]);
};

// generates a selector for each page
// combines common data with page scope
export const pageSelector = (scope) => {
  const scopeSelector = genScopeSelector(scope);

  return createSelector(
    [countSelector, scopeSelector],
    (count, scopedState) => {
      // console.log("selector", customers, products, scopedState);
      return {
        volunteerCount: count,
        ...scopedState
      };
    }
  );
};
