import React from "react";
import { Select, Popconfirm } from "antd";
import {
  statusOptions,
  ngoStatusOptions,
} from "@components/SelectorPanel/SelectFields";

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
  const [status, setStatus] = React.useState(row.status);
  const [confirm, setConfirm] = React.useState(false);

  const handleChange = (value) => {
    setStatus(value);
    setConfirm(true);
  };

  return (
    <Popconfirm
      title="Are you sure want to update this request?"
      onConfirm={() => {
        // update status, TODO: spinner
        console.log("call", id, status);
        onResultClose(id, status);
        setConfirm(false);
      }}
      onCancel={() => {
        // reset dropdown here
        setStatus(row.status);
        setConfirm(false);
      }}
      okText="Yes"
      cancelText="No"
      visible={confirm}
    >
      <Select
        size={"small"}
        placeholder="Actions"
        value={status}
        onChange={handleChange}
        className="lightup red"
      >
        {row.act && row.act === "ngo" ? ngoStatusOptions() : statusOptions()}
      </Select>
    </Popconfirm>
  );
}
