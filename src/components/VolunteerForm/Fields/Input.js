import React from "react";
import { Form, Input, DatePicker } from "antd";
import { toNumber } from "../utils";
const { TextArea } = Input;

export const MobileField = ({
  label = "Mobile Number",
  name = "mobile",
  placeholder = "Enter your mobile number",
}) => (
  <Form.Item
    label={label}
    name={name}
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
    <Input maxLength={10} placeholder={placeholder} />
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

export const Covid19Field = () => (
  <Form.Item
    label="COVID 19 activities"
    name="covid19"
    rules={[
      { required: true, message: "Activities undertaken so far is required" },
    ]}
  >
    <TextArea
      maxLength={100}
      type="textarea"
      rows={4}
      placeholder="COVID 19 activities undertaken so far"
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

export const NameField = ({
  label = "Name",
  placeholder = "Enter your full name",
  name = "name",
}) => (
  <Form.Item
    label={label}
    name={name}
    rules={[{ required: true, message: "Name is required" }]}
  >
    <Input maxLength={200} placeholder={placeholder} />
  </Form.Item>
);

export const EmailField = ({ isRequired = false }) => (
  <Form.Item
    label="Email"
    name="email"
    rules={[
      {
        required: isRequired,
        message: "Email is required",
      },
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

export const NgoNameField = () => (
  <Form.Item
    label="Organization name"
    name="name"
    rules={[{ required: true, message: "Organization name is required" }]}
  >
    <Input maxLength={25} placeholder="Enter organization name" />
  </Form.Item>
);

export const RegNumField = ({
  isRequired = false,
  nameVal = ["organization", "reg"],
}) => (
  <Form.Item
    label="Registration Number"
    name={nameVal}
    rules={[
      { required: isRequired, message: "Registration number is required" },
    ]}
  >
    <Input
      maxLength={100}
      placeholder="Enter organization registration number"
    />
  </Form.Item>
);

export const NOVField = ({
  isRequired = false,
  nameVal = ["organization", "nov"],
}) => (
  <Form.Item
    label="Number of Volunteers"
    name={nameVal}
    rules={[
      {
        required: isRequired,
        message: "Number of Volunteers is required",
      },
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

export const NodalNameField = ({ nameVal = ["organization", "person"] }) => (
  <Form.Item
    label="Name of Nodal Person"
    name={nameVal}
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

export const NOPField = () => (
  <Form.Item
    label="Number of Persons"
    name="nop"
    rules={[
      {
        required: true,
        message: "Number of Persons is required",
      },
    ]}
  >
    <Input
      type="number"
      min="1"
      maxLength={5}
      placeholder="Enter number of individuals who need help"
    />
  </Form.Item>
);
