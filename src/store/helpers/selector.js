import { createSelector } from "reselect";
import parseData from "@utils/Parser";

// generates selector for parsing report results
function generateResultSelector(scope) {
  // get result
  const getResult = (state) => state[scope].result;

  // prase result
  const parsedResultSelector = createSelector([getResult], (result) => {
    const parsedResult = parseData(result);
    return parsedResult;
  });

  return parsedResultSelector;
}

export { generateResultSelector };
