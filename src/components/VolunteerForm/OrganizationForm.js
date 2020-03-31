import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { formItemLayout, tailFormItemLayout } from "./layout";

import {
  AvailabilitySelect,
  RegionSelect,
  OrgTypeSelect
} from "./SelectFields";

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
  NotesField
} from "./InputFields";

import {
  CommunicationsField,
  EntrepreneurialField,
  EssentialField,
  HealthField
} from "./MultiFields";

function OrganizationForm({
  initialValues,
  other,
  regions,
  domain,
  services,
  onSubmit,
  reset
}) {
  console.log("t", arguments[0]);

  const [form] = Form.useForm();
  const { resetFields } = form;

  useEffect(() => {
    resetFields();
  }, [reset]);

  // called if validation passes
  function handleSubmit(values) {
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
        <RegionSelect options={regions} />
        <PinField />

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
