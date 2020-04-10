import jsonexport from "jsonexport";
import { getReportHeader } from "./config";
import parseData from "@utils/Parser";

// wrapper around export for sagas
function triggerExport({ result, act }) {
  const data = parseData(result);
  const options = getReportHeader(act);
  exportData({ data, filename: act, options });
}

// export data as csv
// column headers are optional (keys)
// default ones are generated based on first record
function exportData({ data, filename, options = {} }) {
  jsonexport(data, options, function (err, csv) {
    if (err) return console.log("export err", err);
    // create an anchor tag to trigger download
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.setAttribute(
      "download",
      `${filename}_${new Date().toLocaleString().replace(/[\s,,]/g, "_")}.csv`
    );
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}

export default exportData;
export { triggerExport };
