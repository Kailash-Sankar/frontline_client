import React from "react";
import SelectorPanel from "@components/SelectorPanel";
import { AppealSearchResults } from "@components/SearchResults";
import { Empty } from "antd";
import { connecter } from "@store/appealReport";
import options from "@utils/Options";
import { formatSearchQuery } from "./utils";
import { queryLimit } from "@utils/constants";

function AppealReport({
  result,
  region,
  setRegion,
  search,
  service,
  setService,
}) {
  function onRegionChange(value) {
    setRegion(value);
  }

  function onServiceChange(value) {
    setService(value);
  }

  function handleSearch() {
    const query = formatSearchQuery({ region, service });
    query.act = "appeal"; // fixed type field
    search({
      query,
      limit: queryLimit,
    });
  }

  const searchProps = {
    region,
    regions: options.regions,
    onRegionChange,

    service,
    services: options.services.servicesTree,
    onServiceChange,

    onSubmit: handleSearch,
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Appeal Reports</h2>
      <div>
        <SelectorPanel {...searchProps} />
      </div>
      {result && result.length > 0 ? (
        <div style={{ margin: 30 }}>
          <AppealSearchResults result={result} />
        </div>
      ) : (
        <div style={{ marginTop: 100 }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
    </div>
  );
}

export default connecter(AppealReport);
