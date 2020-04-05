import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { formItemLayout, tailFormItemLayout } from "./layout";

import {
  AvailabilitySelect,
  RegionSelect,
  OrgTypeSelect,
} from "./Fields/Select";

import {
  MobileField,
  ConfirmMobileField,
  AddressField,
  PinField,
  NameField,
  EmailField,
  NodalNameField,
  OrgField,
  RegNumField,
  NOVField,
  NotesField,
  AreaField,
} from "./Fields/Input";

import {
  CommunicationsField,
  EntrepreneurialField,
  EssentialField,
  HealthField,
} from "./Fields/Multi";
import { formatData } from "./utils";

function OrganizationForm({
  initialValues,
  other,
  regions,
  domain,
  services,
  onSubmit,
  reset,
}) {
  const [form] = Form.useForm();
  const { resetFields } = form;

  useEffect(() => {
    resetFields();
  }, [reset]);

  // called if validation passes
  function handleSubmit(values) {
    formatData(values);
    onSubmit(values);
  }

  return (
    <div>
      <Form
        form={form}
        {...formItemLayout}
        onFinish={handleSubmit}
        initialValues={initialValues}
        //hideRequiredMark={true}
      >
        <NameField />

        <OrgField />
        <OrgTypeSelect options={other.orgTypeOptions} />
        <RegNumField />

        <NOVField />

        <AddressField />
        <PinField />
        <RegionSelect options={regions} />
        <AreaField />

        <NodalNameField />
        <EmailField />
        <MobileField />
        <ConfirmMobileField />

        <AvailabilitySelect options={domain.availabilityOptions} />

        <EssentialField options={services.essentialOptions} />
        <HealthField options={services.healthOptions} />
        <CommunicationsField options={services.communicationOptions} />
        <EntrepreneurialField options={services.entrepreneurialOptions} />

        <NotesField />

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default OrganizationForm;
