import React from "react";
import { Form, Checkbox, Row, Col } from "antd";

const renderOptions = (options) =>
  Object.keys(options).map((k) => (
    <Row key={options[k].id}>
      <Col span={24}>
        <Checkbox value={options[k].id} style={{ lineHeight: "32px" }}>
          {options[k].value}
        </Checkbox>
      </Col>
    </Row>
  ));

export const CommunicationsField = ({ options }) => (
  <Form.Item name="service_communications" label="Communication Services">
    <Checkbox.Group>{renderOptions(options)}</Checkbox.Group>
  </Form.Item>
);

export const EntrepreneurialField = ({ options }) => (
  <Form.Item name="service_entrepreneurial" label="Entrepreneurial Services">
    <Checkbox.Group>{renderOptions(options)}</Checkbox.Group>
  </Form.Item>
);

export const EssentialField = ({ options }) => (
  <Form.Item name="service_essential" label="Essential Services">
    <Checkbox.Group>{renderOptions(options)}</Checkbox.Group>
  </Form.Item>
);

export const HealthField = ({ options }) => (
  <Form.Item name="service_health" label="Health Services">
    <Checkbox.Group>{renderOptions(options)}</Checkbox.Group>
  </Form.Item>
);
