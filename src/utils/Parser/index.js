import { NA } from "@utils/constants";
import getParseFn from "./parseConfig";

function dataParser(data) {
  console.log("input", data);

  const res = [];
  data.forEach((row) => {
    const parsedRow = {};
    // check for parsing fn
    Object.keys(row).forEach((k) => {
      if (row[k]) {
        try {
          const parseFn = getParseFn(k);
          parsedRow[k] = parseFn(row[k]);
        } catch (err) {
          console.log("parsing error", err);
          parsedRow[k] = NA;
        }
      } else {
        row[k] = NA;
      }
    });
    console.log("pr", parsedRow);
    if (parsedRow && Object.keys(parsedRow).length > 0) {
      res.push(parsedRow);
    }
  });
  return res;
}

export default dataParser;
