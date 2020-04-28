import React from "react";
import { Form, Input, DatePicker } from "antd";
import { toNumber } from "../utils";
import { useTranslation } from "react-i18next";
const { TextArea } = Input;

export const MobileField = () => {
  const [t] = useTranslation();
  return (
    <Form.Item
      label={t("common.form.label.mobile_number")}
      name="mobile"
      rules={[
        {
          required: true,
          message: t("common.form.validation_messages.mobile_number_required"),
        },
        {
          type: "number",
          transform: toNumber,
          message: t("common.form.validation_messages.mobile_number_invalid_format"),
        },
        {
          len: 10,
          message: t("common.form.validation_messages.mobile_number_length"),
        },
      ]}
    >
      <Input maxLength={10} placeholder={t("common.placeholder.mobile_number")} />
    </Form.Item>
  )
};

export const ConfirmMobileField = () => {
  const [t] = useTranslation();
  return (

    <Form.Item
      label={t("common.confirm_mobile_number")}
      name="co_mobile"
      dependencies={["mobile"]}
      hasFeedback
      rules={[
        {
          required: true,
          message: t("common.form.validation_messages.mobile_number_required"),
        },
        {
          type: "number",
          transform: toNumber,
          message: t("common.form.validation_messages.mobile_number_invalid_format"),
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
      <Input maxLength={10} placeholder={t("common.reenter_number")} />
    </Form.Item>
  )
};

export const AddressField = () => {
  const [t] = useTranslation();
  return (
    <Form.Item label={t("common.form.label.address")} name="address">
      <TextArea
        maxLength={100}
        type="textarea"
        rows={4}
        placeholder={t("common.placeholder.enter_address")}
      />
    </Form.Item>
  )
};

export const PinField = () => {
  const [t] = useTranslation();
  return (
    <Form.Item
      label={t("common.form.label.pin_code")}
      name="pin"
      rules={[
        {
          required: true,
          message: t("common.form.validation_messages.pin_code_required"),
        },
        {
          type: "number",
          transform: toNumber,
          message: t("common.form.validation_messages.pin_code_invalid_format"),
        },
        {
          len: 6,
          message: t("common.form.validation_messages.pin_code_length"),
        },
      ]}
    >
      <Input maxLength={6} placeholder={t("common.placeholder.pin_code")} />
    </Form.Item>
  )
};

export const NameField = () => {
  const [t] = useTranslation();
  return (
    <Form.Item
      label={t("common.name")}
      name={name}
      rules={[{ required: true, message: t("common.form.validation_messages.name_required") }]}
    >
      <Input maxLength={200} placeholder={t("common.placeholder.name")} />
    </Form.Item>
  )
};

export const EmailField = () => {
  const [t] = useTranslation();
  return (
    <Form.Item
      label={t("common.form.label.email")}
      name="email"
      rules={[
        {
          type: "email",
          message: t("common.form.validation_messages.email_validation"),
        },
      ]}
    >
      <Input maxLength={200} placeholder={t("common.placeholder.email")} />
    </Form.Item>
  )
};

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

export const NOPField = () => (
  <Form.Item
    label="Number of Persons"
    name="nop"
    rules={[
      {
        type: "number",
        transform: toNumber,
        message: "Invalid format",
      },
      {
        required: true,
        message: "Number of Persons is required",
      },
    ]}
  >
    <Input
      maxLength={5}
      placeholder="Enter number of individuals who need help"
    />
  </Form.Item>
);
