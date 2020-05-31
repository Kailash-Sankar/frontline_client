import React from "react";
import SelectorPanel from "@components/SelectorPanel";
import { NGOSearchResults } from "@components/SearchResults";
import { Empty } from "antd";
import { connecter } from "@store/ngoReport";
import options from "@utils/Options";
import { formatSearchQuery } from "../utils";
import ExportButton from "@components/Misc/ExportButton";

const ACT = "ngo";

const NGOReport = ({
  result,
  region,
  setRegion,
  search,
  service,
  setService,
  pagination,
  dateRange,
  setDateRange,
  exportCSV,
  setStatus,
  status,
  updateStatus,
}) => {
  function onRegionChange(value) {
    setRegion(value);
  }

  const onDateRangeChange = (value) => {
    value ? setDateRange(value) : setDateRange([null, null]);
  };

  function onServiceChange(value) {
    setService(value);
  }

  function onStatusChange(value) {
    setStatus(value);
  }

  function onResultClose(id, status) {
    const url = `/ngo/update/${id}`;
    updateStatus(url, { status: status });
  }

  function formatParams() {
    const query = formatSearchQuery({ region, service, dateRange, status });
    query.act = ACT; // fixed type field
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

  function handleExport() {
    exportCSV({
      query: formatParams(),
    });
  }

  const searchProps = {
    region,
    regions: options.regions,
    onRegionChange,

    service,
    services: options.services.servicesTree,
    onServiceChange,

    dateRange: dateRange,
    onDateRangeChange,

    status,
    onStatusChange,

    onSubmit: handleSearch,
    act: ACT,
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>NGO Registration</h2>
      <div>
        <SelectorPanel {...searchProps} />
      </div>
      {result && result.length > 0 ? (
        <div style={{ margin: 30 }}>
          <NGOSearchResults
            result={result}
            pagination={pagination}
            onPageChange={handlePageChange}
            onShowSizeChange={handleSizeChange}
            onResultClose={onResultClose}
          />
          <ExportButton onClick={handleExport} />
        </div>
      ) : (
        <div style={{ marginTop: 100 }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
    </div>
  );
};

export default connecter(NGOReport);
