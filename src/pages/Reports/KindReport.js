import React from "react";
import SelectorPanel from "@components/SelectorPanel";
import { KindSearchResults } from "@components/SearchResults";
import { Empty } from "antd";
import { connecter } from "@store/kindReport";
import options from "@utils/Options";
import { formatSearchQuery } from "../utils";
import ExportButton from "@components/Misc/ExportButton";

const ACT = "kind";

function KindReport({
  result,
  mode,
  setMode,
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
}) {
  function onModeChange(value) {
    setMode(value);
  }

  const onDateRangeChange = (value) => {
    value ? setDateRange(value) : setDateRange([null, null]);
  };

  function onRegionChange(value) {
    setRegion(value);
  }

  function onServiceChange(value) {
    setService(value);
  }

  function onStatusChange(value) {
    setStatus(value);
  }

  function onResultClose(id) {
    const url = `/update/${id}`;
    updateStatus(url, { status: "closed" });
  }

  function formatParams() {
    const query = formatSearchQuery({
      mode,
      region,
      service,
      dateRange,
      status,
    });
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
    mode,
    modes: options.other.modeOptions,
    onModeChange,

    region,
    regions: options.regions,
    onRegionChange,

    service,
    services: options.services.servicesTree,
    onServiceChange,

    status,
    onStatusChange,

    dateRange: dateRange,
    onDateRangeChange,

    onSubmit: handleSearch,
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Support in Kind (Reports)</h2>
      <div>
        <SelectorPanel {...searchProps} />
      </div>
      {result && result.length > 0 ? (
        <div style={{ margin: 30 }}>
          <KindSearchResults
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
}

export default connecter(KindReport);
