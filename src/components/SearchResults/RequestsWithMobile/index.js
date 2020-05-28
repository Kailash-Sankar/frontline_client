import React from "react";
import { Table, Tag } from "antd";
import { getPaginationObject } from "../utils";

function SearchResults({ result, pagination, onPageChange, onShowSizeChange }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Request Raised By",
      dataIndex: "mobile",
    },
    {
      title: "Point Of Contact",
      dataIndex: "poc_mobile",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  return (
    <div>
      <div>
        <Table
          columns={columns}
          dataSource={result}
          rowKey={(r) => r._id}
          expandable={{
            expandedRowRender: (record) => (
              <p>
                <Tag color="blue">Description</Tag>
                {record.desc}
              </p>
            ),
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
