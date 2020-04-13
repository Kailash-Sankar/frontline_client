import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;
import { toNumber } from "../utils";

const unitSelector = (baseName) => (
  <Form.Item name={[...baseName, "unit"]} noStyle>
    <Select style={{ width: 90 }}>
      <Option value="count">Count</Option>
      <Option value="kilo">kg</Option>
      <Option value="litre">litres</Option>
      <Option value="na">NA</Option>
    </Select>
  </Form.Item>
);

export const DynamicServicList = ({ serviceType, options }) => {
  return options.map((o) => {
    const baseName = ["services", serviceType, "values", o.id];
    return (
      <Form.Item
        key={o.id}
        label={o.value}
        name={[...baseName, "quantity"]}
        rules={[
          {
            type: "number",
            transform: toNumber,
            message: "Invalid number format",
          },
        ]}
      >
        <Input
          addonAfter={unitSelector(baseName)}
          maxLength={5}
          size={15}
          placeholder="Quantity"
        />
      </Form.Item>
    );
  });
};
