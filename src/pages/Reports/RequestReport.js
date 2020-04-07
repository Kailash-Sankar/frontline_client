import React from "react";
import { connecter } from "@store/requestReport";
import SelectorPanel from "@components/SelectorPanel";
import options from "@utils/Options";
import { Empty } from "antd";
import { RequestSearchResults } from "@components/SearchResults";
import { formatSearchQuery } from "../utils";

const RequestReport = ({
  result,
  region,
  setRegion,
  search,
  service,
  setService,
  pagination,
}) => {
  function onRegionChange(value) {
    setRegion(value);
  }

  function onServiceChange(value) {
    setService(value);
  }

  function formatParams() {
    const query = formatSearchQuery({ region, service });
    query.act = "request"; // fixed type field
    return query;
  }

  function triggerSearch({ page = 1, limit = pagination.limit }) {
    search({
      query: formatParams(),
      page,
      limit,
    });
  }

  // handle search and pagination actions
  function handleSearch() {
    triggerSearch({}); // need empty braces here
  }

  function handlePageChange(page = 1) {
    triggerSearch({ page });
  }

  function handleSizeChange(page, limit) {
    triggerSearch({ limit });
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
      <h2>Request Reports</h2>
      <div>
        <SelectorPanel {...searchProps} />
      </div>
      {result && result.length > 0 ? (
        <div style={{ margin: 30 }}>
          <RequestSearchResults
            result={result}
            pagination={pagination}
            onPageChange={handlePageChange}
            onShowSizeChange={handleSizeChange}
          />
        </div>
      ) : (
        <div style={{ marginTop: 100 }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
    </div>
  );
};

export default connecter(RequestReport);
