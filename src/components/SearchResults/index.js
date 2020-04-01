import React from "react";
import { formatDate } from "@components/Utils";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Type",
    dataIndex: "mode"
  },
  {
    title: "Region",
    dataIndex: "region",
    render: (region) => <span>{region.join(",")}</span>
  },
  {
    title: "Mobile",
    dataIndex: "mobile"
  },
  {
    title: "Signup Date",
    dataIndex: "createdAt",
    render: (date) => <span>{formatDate(date)}</span>
  }
];

function SearchResults({ result }) {
  return (
    <div>
      <Table columns={columns} dataSource={result} />
    </div>
  );
}

export default SearchResults;
