import React from "react";
import { Form, Input, DatePicker, Row, Col, Radio } from "antd";
import { toNumber } from "../utils";
const { TextArea } = Input;

export const MobileField = () => (
  <Form.Item
    label="Mobile Number"
    name="mobile"
    rules={[
      {
        required: true,
        message: "Mobile number is required",
      },
      {
        type: "number",
        transform: toNumber,
        message: "Invalid number format",
      },
      {
        len: 10,
        message: "Mobile number must be 10 digits",
      },
    ]}
  >
    <Row gutter={8}>
      <Col span={8}>
        <Input maxLength={10} placeholder="Enter your mobile number" />
      </Col>
    </Row>
  </Form.Item>
);

export const ConfirmMobileField = () => (
  <Form.Item
    label="Confirm Mobile Number"
    name="co_mobile"
    dependencies={["mobile"]}
    hasFeedback
    rules={[
      {
        required: true,
        message: "Mobile number confirmation is required",
      },
      {
        type: "number",
        transform: toNumber,
        message: "Invalid number format",
      },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue("mobile") === value) {
            return Promise.resolve();
          }
          return Promise.reject("The two numbers you entered do not match!");
        },
      }),
    ]}
  >
    <Row gutter={8}>
      <Col span={8}>
        <Input maxLength={10} placeholder="Enter re-enter your mobile number" />
      </Col>
    </Row>
  </Form.Item>
);

export const AddressField = () => (
  <Form.Item label="Address" name="address">
    <Row gutter={8}>
      <Col span={12}>
        <TextArea
          maxLength={100}
          type="textarea"
          rows={4}
          placeholder="Enter your address"
        />
      </Col>
    </Row>
  </Form.Item>
);

export const PinField = () => (
  <Form.Item
    label="Pin Code"
    name="pin"
    rules={[
      {
        required: true,
        message: "Pin code is required",
      },
      {
        type: "number",
        transform: toNumber,
        message: "Invalid format",
      },
      {
        len: 6,
        message: "Pin must be 6 digits",
      },
    ]}
  >
    <Row gutter={8}>
      <Col span={4}>
        <Input maxLength={6} placeholder="Enter pin code" />
      </Col>
    </Row>
  </Form.Item>
);

export const NameField = () => (
  <Form.Item
    label="Name"
    name="name"
    rules={[{ required: true, message: "Name is required" }]}
  >
    <Row gutter={8}>
      <Col span={10}>
        <Input maxLength={25} placeholder="Enter your full name" />
      </Col>
    </Row>
  </Form.Item>
);

export const EmailField = () => (
  <Form.Item
    label="Email"
    name="email"
    rules={[
      {
        type: "email",
        message: "Input is not a valid E-mail!",
      },
    ]}
  >
    <Row gutter={8}>
      <Col span={10}>
        <Input maxLength={25} placeholder="Enter an email id" />
      </Col>
    </Row>
  </Form.Item>
);

export const DOBField = () => (
  <Form.Item name={["individual", "dob"]} label="Date of Birth">
    <DatePicker />
  </Form.Item>
);

export const AadharField = () => (
  <Form.Item label="Aadhar Number" name={["individual", "aadhar"]}>
    <Row gutter={8}>
      <Col span={10}>
        <Input maxLength={25} placeholder="Enter Aadhar number" />
      </Col>
    </Row>
  </Form.Item>
);

export const OrgField = () => (
  <Form.Item
    label="Head of Organization"
    name={["organization", "head"]}
    rules={[{ required: true, message: "Head of Organization is required" }]}
  >
    <Row gutter={8}>
      <Col span={10}>
        <Input maxLength={25} placeholder="Enter name of organization head" />
      </Col>
    </Row>
  </Form.Item>
);

export const RegNumField = () => (
  <Form.Item label="Registration Number" name={["organization", "reg"]}>
    <Row gutter={8}>
      <Col span={12}>
        <Input
          maxLength={100}
          placeholder="Enter organization registration number"
        />
      </Col>
    </Row>
  </Form.Item>
);

export const NOVField = () => (
  <Form.Item
    label="Number of Volunteers"
    name={["organization", "nov"]}
    rules={[
      {
        type: "number",
        transform: toNumber,
        message: "Invalid format",
      },
    ]}
  >
    <Row gutter={8}>
      <Col span={5}>
        <Input maxLength={10} placeholder="Enter number of volunteers" />
      </Col>
    </Row>
  </Form.Item>
);

export const NodalNameField = () => (
  <Form.Item
    label="Name of Nodal Person"
    name={["organization", "person"]}
    rules={[{ required: true, message: "Name of Nodal Person is required" }]}
  >
    <Row gutter={8}>
      <Col span={10}>
        <Input maxLength={25} placeholder="Enter name of nodal person" />
      </Col>
    </Row>
  </Form.Item>
);

export const NotesField = () => (
  <Form.Item label="Notes" name="notes">
    <Row gutter={8}>
      <Col span={12}>
        <TextArea
          maxLength={200}
          type="textarea"
          rows={4}
          placeholder="Leave additional notes here."
        />
      </Col>
    </Row>
  </Form.Item>
);

export const PubliciseField = () => (
  <Form.Item label="Publicise Contribution" name="publicise">
    <Row gutter={8}>
      <Col span={6}>
        <Radio.Group>
          <Radio value="y">Yes</Radio>
          <Radio value="n">No</Radio>
        </Radio.Group>
      </Col>
    </Row>
  </Form.Item>
);

export const AreaField = () => (
  <Form.Item label="Area" name="area">
    <Row gutter={8}>
      <Col span={10}>
        <Input maxLength={25} placeholder="Enter area/locality" />
      </Col>
    </Row>
  </Form.Item>
);
