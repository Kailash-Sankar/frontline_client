import React from "react";
import { Form, Select, Cascader, Row, Col } from "antd";
const { Option } = Select;

const renderOptions = (options) =>
  options.map((k) => <Option key={k.id}>{k.value || k.name}</Option>);

const renderOptionsObject = (options) =>
  Object.values(options).map((k) => (
    <Option key={k.id}>{k.value || k.name}</Option>
  ));

export const RegionSelect = ({ options }) => (
  <Form.Item
    label="Region"
    name="region"
    rules={[{ required: true, message: "Region is required" }]}
  >
    <Row>
      <Col span={20}>
        <Cascader placeholder="Select your region" options={options} />
      </Col>
    </Row>
  </Form.Item>
);

export const StateSelect = ({ options }) => (
  <Form.Item
    label="State"
    name="state"
    rules={[{ required: true, message: "State is required" }]}
  >
    <Row>
      <Col span={20}>
        <Select placeholder="Select a value">{renderOptions(options)}</Select>
      </Col>
    </Row>
  </Form.Item>
);

export const AvailabilitySelect = ({ options }) => (
  <Form.Item
    label="Availability"
    name="availability"
    rules={[{ required: true, message: "Availability is required" }]}
  >
    <Row>
      <Col span={20}>
        <Select placeholder="Select a value">{renderOptions(options)}</Select>
      </Col>
    </Row>
  </Form.Item>
);

export const QualificationSelect = ({ options }) => (
  <Form.Item
    label="Educational Qualification"
    name={["individual", "qualification"]}
    rules={[{ required: true, message: "Qualification is required" }]}
  >
    <Row>
      <Col span={20}>
        <Select placeholder="Select a value">{renderOptions(options)}</Select>
      </Col>
    </Row>
  </Form.Item>
);

export const ProfessionSelect = ({ options }) => (
  <Form.Item
    label="Profession"
    name={["individual", "profession"]}
    rules={[{ required: true, message: "Profession is required" }]}
  >
    <Row>
      <Col span={20}>
        <Select placeholder="Select a value">{renderOptions(options)}</Select>
      </Col>
    </Row>
  </Form.Item>
);

export const GenderSelect = ({ options }) => (
  <Form.Item label="Gender" name={["individual", "gender"]}>
    <Row>
      <Col span={20}>
        <Select placeholder="Select a value">{renderOptions(options)}</Select>
      </Col>
    </Row>
  </Form.Item>
);

export const OrgTypeSelect = ({ options }) => (
  <Form.Item
    label="Type of Organization"
    name={["organization", "cat"]}
    rules={[{ required: true, message: "Organization type is required" }]}
  >
    <Row>
      <Col span={20}>
        <Select placeholder="Select a value">{renderOptions(options)}</Select>
      </Col>
    </Row>
  </Form.Item>
);

export const MedicalField = ({ options, onChange }) => (
  <Form.Item name={["services", "medical", "id"]} label="Medical Supplies">
    <Row>
      <Col span={20}>
        <Select mode="multiple" onChange={onChange}>
          {renderOptionsObject(options)}
        </Select>
      </Col>
    </Row>
  </Form.Item>
);

export const NonMedicalField = ({ options, onChange }) => (
  <Form.Item
    name={["services", "nonmedical", "id"]}
    label="Food &amp; Essential Supplies"
  >
    <Row>
      <Col span={20}>
        <Select mode="multiple" onChange={onChange}>
          {renderOptionsObject(options)}
        </Select>
      </Col>
    </Row>
  </Form.Item>
);
