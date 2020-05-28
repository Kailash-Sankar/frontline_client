// copy of reports/kindreport

import React, { useState } from "react";
import { SearchWithMobilePanel } from "@components/SelectorPanel/SearchWithMobilePanel";
import SearchResults from "@components/SearchResults/RequestsWithMobile";
import { Empty } from "antd";
import { connecter } from "@store/SearchWithMobile";

const ACT = "request";

function SearchWithMobile({ result, search, pagination, updateStatus }) {
  const [mobileNumber, setmobileNumber] = useState(0);

  function onResultClose(id, status) {
    const url = `/update/${id}`;
    updateStatus(url, { status: status });
  }

  function formatParams() {
    const query = {};
    query.poc_mobile = mobileNumber;
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

  const searchProps = {
    mobileUpdate: setmobileNumber,

    onSubmit: handleSearch,
  };

  return (
    <div style={{ textAlign: "left" }}>
      <div>
        <SearchWithMobilePanel {...searchProps} />
      </div>
      {result && result.length > 0 ? (
        <div style={{ margin: 30 }}>
          <SearchResults
            result={result}
            pagination={pagination}
            onPageChange={handlePageChange}
            onShowSizeChange={handleSizeChange}
            onResultClose={onResultClose}
          />
        </div>
      ) : (
        <div style={{ marginTop: 100 }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
    </div>
  );
}

export default connecter(SearchWithMobile);
