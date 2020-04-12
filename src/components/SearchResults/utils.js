import React from "react";
import { Button, Popconfirm } from "antd";

// search results pagination format helper
export function getPaginationObject(
  pagination,
  onPageChange,
  onShowSizeChange
) {
  return {
    current: pagination.page,
    total: pagination.total,
    onChange: onPageChange,
    pageSize: pagination.limit,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    showSizeChanger: true,
    onShowSizeChange: onShowSizeChange,
  };
}

export function renderStatus(id, row, onResultClose) {
  if (row.status == "open") {
    return (
      <Popconfirm
        title="Are you sure want to close this request?"
        onConfirm={() => onResultClose(id)}
        onCancel={() => {}}
        okText="Yes"
        cancelText="No"
      >
        <Button size={"small"} type="default" danger>
          Close
        </Button>
      </Popconfirm>
    );
  }
  return <span style={{ color: "red" }}>{row.status}</span>;
}
