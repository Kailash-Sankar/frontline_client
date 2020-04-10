import React from "react";
import { Table } from "antd";
import Details from "./Details";
import { getPaginationObject } from "../utils";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Type",
    dataIndex: "mode",
  },
  {
    title: "Region",
    dataIndex: "region",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Signup Date",
    dataIndex: "createdAt",
  },
  {
    title: "Availability",
    dataIndex: "availability",
  },
];

function SearchResults({ result, pagination, onPageChange, onShowSizeChange }) {
  return (
    <div>
      <div>
        <Table
          columns={columns}
          dataSource={result}
          rowKey={(r) => r._id}
          expandable={{
            expandedRowRender: (record) => (
              <div>
                <Details record={record} />
              </div>
            ),
            expandRowByClick: true,
          }}
          pagination={getPaginationObject(
            pagination,
            onPageChange,
            onShowSizeChange
          )}
          size="middle"
        />
      </div>
    </div>
  );
}

export default SearchResults;
