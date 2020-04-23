import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { RegionSelect } from "@components/VolunteerForm/Fields/Select";
import { formItemLayout, tailFormItemLayout } from "./layout";

const { TextArea } = Input;
import {
  MobileField,
  AddressField,
  PinField,
  NameField,
  ConfirmMobileField,
  NOPField,
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

        <NOPField />

        <MobileField
          name="poc_mobile"
          label="Point of Contact"
          placeholder="Enter point of contact's mobile number"
        />

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
