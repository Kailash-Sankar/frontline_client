import React from "react";
import { Select, Cascader } from "antd";
const { Option } = Select;

export function ModeSelect({ mode, modes, onModeChange }) {
  return (
    <Select
      style={{ width: 200 }}
      value={mode}
      onChange={onModeChange}
      placeholder="Select a value"
      allowClear
    >
      {modes.map((k) => (
        <Option key={k.id}>{k.value}</Option>
      ))}
    </Select>
  );
}

export const statusOptions = () => [
  <Option key="open" className="lightup cyan">
    Open
  </Option>,
  <Option key="invalid" className="lightup orange">
    Invalid
  </Option>,
  <Option key="closed" className="lightup red">
    Closed
  </Option>,
];

export function StatusSelect({ status, onStatusChannge }) {
  return (
    <Select style={{ width: 100 }} value={status} onChange={onStatusChannge}>
      <Option value="">All</Option>
      {statusOptions()}
    </Select>
  );
}

export function RegionSelect({ region, regions, onRegionChange }) {
  return (
    <Cascader
      style={{ width: 300 }}
      placeholder="Select your region"
      options={regions}
      value={region}
      onChange={onRegionChange}
    />
  );
}
