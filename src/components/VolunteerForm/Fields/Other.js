import React from "react";
import { Form, Input, Select, Row, Col } from "antd";
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
    <Row>
      <Col span={20}>
        <TextArea rows={4} placeholder={"Describe your appeal briefly."} />
      </Col>
    </Row>
  </Form.Item>
);

export const TagField = () => (
  <Form.Item
    name="tags"
    label="Tags"
    //rules={[{ required: false, message: 'Please select', type: 'array' }]}
  >
    <Row>
      <Col span={20}>
        <Select mode="tags" placeholder="Please select applcable tags.">
          <Option value="food">Food</Option>
          <Option value="groceries">Groceries</Option>
          <Option value="medicines">Medicines</Option>
          <Option value="supplies">Supplies</Option>
        </Select>
      </Col>
    </Row>
  </Form.Item>
);
