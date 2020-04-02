import React from "react";
import SelectorPanel from "@components/SelectorPanel";
import SearchResults from "@components/SearchResults";
import { Empty } from "antd";
import { connecter } from "@store/report";
import options from "@utils/Options";
import { formatSearchQuery } from "./utils";

function Report({
  result,
  mode,
  setMode,
  region,
  setRegion,
  search,
  service,
  setService
}) {
  function onModeChange(value) {
    setMode(value);
  }
  function onRegionChange(value) {
    setRegion(value);
  }

  function onServiceChange(value) {
    setService(value);
  }

  function handleSearch() {
    const params = formatSearchQuery({ mode, region, service });
    search(params);
  }

  const searchProps = {
    mode,
    modes: options.other.modeOptions,
    onModeChange,

    region,
    regions: options.regions,
    onRegionChange,

    service,
    services: options.services.servicesTree,
    onServiceChange,

    onSubmit: handleSearch
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
