import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { RegionSelect } from "@components/VolunteerForm/Fields/Select";
import { formItemLayout, tailFormItemLayout } from "./layout";
import { toNumber } from "./utils";

const { TextArea } = Input;
import {
  MobileField,
  AddressField,
  PinField,
  NameField,
  ConfirmMobileField,
} from "./Fields/Input";
import { Section } from "./Fields/Other";

const RequestForHelpForm = (props) => {
  const [form] = Form.useForm();
  const { resetFields } = form;

  useEffect(() => {
    resetFields();
  }, [props.reset]);

  return (
    <div>
      <Form
        form={form}
        {...formItemLayout}
        initialValues={props.initialValues}
        onFinish={props.handleSubmit}
      >
        <Section label="Help Required At" />
        <Form.Item
          label="Description"
          name="desc"
          rules={[
            {
              required: true,
              message: "Description is required.",
            },
          ]}
        >
          <TextArea
            type="textarea"
            rows={4}
            placeholder="Please enter description."
          />
        </Form.Item>

        <Form.Item
          label="No. of Persons"
          name="persons"
          rules={[
            {
              required: true,
              message: "Number of Persons is required",
            },
            {
              type: "number",
              transform: toNumber,
              message: "Invalid number format",
            },
          ]}
        >
          <Input maxLength={5} placeholder="Enter number of persons need help" />
        </Form.Item>

        <Form.Item
          label="Area"
          name="area"
          rules={[
            {
              required: true,
              message: "Area is required.",
            },
          ]}
        >
          <Input placeholder="Enter area/locality" />
        </Form.Item>

        <RegionSelect options={props.options} />

        <PinField />

        <Form.Item
          label="Point of Contact"
          name="poc"
          rules={[
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
          <Input maxLength={10} placeholder="Enter point of contact's mobile number" />
        </Form.Item>

        <Section label="Request Raised By" />

        <NameField />
        <MobileField />
        <ConfirmMobileField />
        <AddressField />

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RequestForHelpForm;
