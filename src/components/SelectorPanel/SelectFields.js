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
