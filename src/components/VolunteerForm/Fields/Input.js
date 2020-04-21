import React from "react";
import { Form, Input, DatePicker, Radio } from "antd";
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
    <Input maxLength={10} placeholder="Enter your mobile number" />
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
    <Input maxLength={10} placeholder="Enter re-enter your mobile number" />
  </Form.Item>
);

export const AddressField = () => (
  <Form.Item label="Address" name="address">
    <TextArea
      maxLength={100}
      type="textarea"
      rows={4}
      placeholder="Enter your address"
    />
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
    <Input maxLength={6} placeholder="Enter pin code" />
  </Form.Item>
);

export const NameField = () => (
  <Form.Item
    label="Name"
    name="name"
    rules={[{ required: true, message: "Name is required" }]}
  >
    <Input maxLength={25} placeholder="Enter your full name" />
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
    <Input maxLength={200} placeholder="Enter an email id" />
  </Form.Item>
);

export const DOBField = () => (
  <Form.Item name={["individual", "dob"]} label="Date of Birth">
    <DatePicker />
  </Form.Item>
);

export const AadharField = () => (
  <Form.Item
    label="Aadhar Number"
    name={["individual", "aadhar"]}
    rules={[
      {
        type: "number",
        transform: toNumber,
        message: "Aadhar must be a number",
      },
      {
        len: 12,
        message: "Aadhar must be 12 digits",
      },
    ]}
  >
    <Input maxLength={25} placeholder="Enter Aadhar number" />
  </Form.Item>
);

export const OrgField = () => (
  <Form.Item
    label="Head of Organization"
    name={["organization", "head"]}
    rules={[{ required: true, message: "Head of Organization is required" }]}
  >
    <Input maxLength={25} placeholder="Enter name of organization head" />
  </Form.Item>
);

export const RegNumField = () => (
  <Form.Item label="Registration Number" name={["organization", "reg"]}>
    <Input
      maxLength={100}
      placeholder="Enter organization registration number"
    />
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
    <Input maxLength={10} placeholder="Enter number of volunteers" />
  </Form.Item>
);

export const NodalNameField = () => (
  <Form.Item
    label="Name of Nodal Person"
    name={["organization", "person"]}
    rules={[{ required: true, message: "Name of Nodal Person is required" }]}
  >
    <Input maxLength={25} placeholder="Enter name of nodal person" />
  </Form.Item>
);

export const NotesField = ({
  placeholder = "Leave additional notes here.",
}) => (
  <Form.Item label="Notes" name="notes">
    <TextArea
      maxLength={200}
      type="textarea"
      rows={4}
      placeholder={placeholder}
    />
  </Form.Item>
);

export const AreaField = () => (
  <Form.Item label="Area" name="area">
    <Input maxLength={25} placeholder="Enter area/locality" />
  </Form.Item>
);
