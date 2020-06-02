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

/**
 * Based on the act type, if that is ngo then this form is choosen.
 * NGO form has a different status than any other forms
 */
export const ngoStatusOptions = () => [
  <Option key="new" className="lightup cyan">
    New
  </Option>,
  <Option key="verified" className="lightup orange">
    Verified
  </Option>,
];

export function StatusSelect({ status, onStatusChannge, act }) {
  return (
    <Select style={{ width: 100 }} value={status} onChange={onStatusChannge}>
      <Option value="">All</Option>
      {act && act === "ngo" ? ngoStatusOptions() : statusOptions()}
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
      expandTrigger="hover"
      changeOnSelect
    />
  );
}
