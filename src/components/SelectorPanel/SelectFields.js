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

/*
export function ProductSelect({ product, products, onProductChange }) {
  return (
    <Select
      style={{ width: 200 }}
      value={product}
      onChange={onProductChange}
      placeholder="Select a value"
    >
      {Object.keys(products).map((k) => (
        <Option key={products[k].id}>{products[k].name}</Option>
      ))}
    </Select>
  );
}

export function CustomerSelect({ customer, customers, onCustomerChange }) {
  return (
    <Select
      //showSearch
      //defaultValue={""}
      style={{ width: 200 }}
      value={customer}
      onChange={onCustomerChange}
      placeholder="Select a value"
    >
      {Object.keys(customers).map((k) => (
        <Option key={customers[k].id}>{customers[k].name}</Option>
      ))}
    </Select>
  );
}
*/
