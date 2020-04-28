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
import { useTranslation } from 'react-i18next';

const RequestForHelpForm = (props) => {
  const [form] = Form.useForm();
  const { resetFields } = form;
  const [t] = useTranslation();

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
        <Section label={t("common.request_for_help_form.help_required_at")} />

        <NameField
          label={t("common.request_for_help_form.point_of_contact_name")}
          placeholder={t("common.request_for_help_form.placeholder.enter_point_of_contacts_name")}
          name="poc_name"
        />

        <MobileField
          name="poc_mobile"
          label={t("common.request_for_help_form.point_of_contact_mobile")}
          placeholder={t("common.request_for_help_form.placeholder.enter_point_of_contacts_mobile")}
        />

        <Form.Item
          label={t("common.request_for_help_form.description")}
          name="desc"
          rules={[
            {
              required: true,
              message: t("common.form.validation_messages.description"),
            },
          ]}
        >
          <TextArea
            type="textarea"
            rows={4}
            placeholder={t("common.request_for_help_form.placeholder.description")}
          />
        </Form.Item>

        <Form.Item
          label={t("common.request_for_help_form.area")}
          name="area"
          rules={[
            {
              required: true,
              message: t("common.form.validation_messages.area"),
            },
          ]}
        >
          <Input placeholder={t("common.request_for_help_form.placeholder.area")} />
        </Form.Item>

        <RegionSelect options={props.options} />

        <PinField />

        <Section label={t("common.request_for_help_form.request_raised_by")} />

        <NameField />
        <MobileField />
        <ConfirmMobileField />
        <AddressField />

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            {t("common.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RequestForHelpForm;
