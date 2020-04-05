import React from "react";
import { Form, Input, Select } from "antd";
const { TextArea } = Input;
const { Option } = Select;

export const AppealField = () => (
  <Form.Item
    label="Appeal"
    name="appeal"
    rules={[
      {
        required: true,
        message: "A brief appeal is required.",
      },
    ]}
  >
    <TextArea
      rows={4}
      placeholder={"Please describe your need as precisely as possible"}
    />
  </Form.Item>
);

export const TagField = () => (
  <Form.Item
    name="tags"
    label="Tags"
    //rules={[{ required: false, message: 'Please select', type: 'array' }]}
  >
    <Select mode="tags" placeholder="Please select applcable tags.">
      <Option value="food">Food</Option>
      <Option value="groceries">Groceries</Option>
      <Option value="medicines">Medicines</Option>
    </Select>
  </Form.Item>
);
