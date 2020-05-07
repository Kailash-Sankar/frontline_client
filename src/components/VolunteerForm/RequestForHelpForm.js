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

        <NameField
          label="Point of Contact - Name"
          placeholder="Enter point of contact's name"
          name="poc_name"
        />

        <MobileField
          name="poc_mobile"
          label="Point of Contact - Mobile"
          placeholder="Enter point of contact's mobile number"
        />

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
            placeholder="Please describe your request along with secondary contact info if any"
          />
        </Form.Item>

        <Form.Item
          label="Number of Persons"
          name="nop"
          rules={[
            {
              required: true,
              message: "Number of Persons is required.",
            },
          ]}
        >
          <Input type="number" min="1" placeholder="Enter Number of Persons." />
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
