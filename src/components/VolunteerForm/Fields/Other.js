import React from "react";
import { Form, Input, Select, Row, Col } from "antd";
const { TextArea } = Input;
const { Option } = Select;
import * as styles from "./index.module.less";

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

export const Section = ({ label }) => (
  <Row>
    <Col xs={10} sm={10} md={6} lg={6}>
      <span></span>
    </Col>
    <Col>
      <div className={styles.section}>{label}</div>
    </Col>
  </Row>
);
