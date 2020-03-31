import React from "react";
import SelectorPanel from "@components/SelectorPanel";
import SearchResults from "@components/SearchResults";
import { Empty } from "antd";
import { connecter } from "@store/report";
import options from "@utils/Options";

function Report({ result, mode, setMode, region, setRegion }) {
  function onModeChange(value) {
    setMode(value);
  }

  function onRegionChange(value) {
    setRegion(value);
  }

  const searchProps = {
    mode,
    modes: options.other.orgTypeOptions,
    onModeChange,
    region,
    regions: options.regions,
    onRegionChange
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Volunteer Reports</h2>
      <div>
        <SelectorPanel {...searchProps} />
      </div>
      {result && result.length > 0 ? (
        <div style={{ margin: 30 }}>
          <SearchResults result={result} />
        </div>
      ) : (
        <div style={{ marginTop: 100 }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
    </div>
  );
}

/*
  <div style={{ marginTop: 20 }}>
    <Button type="primary" onClick={handleDownload}>
      Download
    </Button>
  </div>
*/

export default connecter(Report);
