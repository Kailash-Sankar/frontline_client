import React from "react";
import { Form, Input, Select } from "antd";
const { TextArea } = Input;
const { Option } = Select;

export const AppealField = () => (
  <Form.Item
    label="Description"
    name="desc"
    rules={[
      {
        required: false,
        message: "Describe your appeal briefly.",
      },
    ]}
  >
    <TextArea rows={4} placeholder={"Describe your appeal briefly."} />
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
      <Option value="supplies">Supplies</Option>
    </Select>
  </Form.Item>
);
