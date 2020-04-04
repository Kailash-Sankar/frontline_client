import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { formItemLayout, tailFormItemLayout } from "./layout";

import {
  AvailabilitySelect,
  QualificationSelect,
  ProfessionSelect,
  GenderSelect,
  RegionSelect,
} from "./Fields/Select";

import {
  MobileField,
  ConfirmMobileField,
  AddressField,
  PinField,
  NameField,
  EmailField,
  DOBField,
  NotesField,
} from "./Fields/Input";

import {
  CommunicationsField,
  EntrepreneurialField,
  EssentialField,
  HealthField,
} from "./Fields/Multi";

import { formatData } from "./utils";

function IndividualForm({
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
        <EmailField />
        <DOBField />
        <GenderSelect options={other.genderOptions} />

        <MobileField />
        <ConfirmMobileField />

        <AddressField />
        <RegionSelect options={regions} />
        <PinField />

        <AvailabilitySelect options={domain.availabilityOptions} />
        <QualificationSelect options={domain.qualificationOptions} />
        <ProfessionSelect options={domain.professionOptions} />

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

export default IndividualForm;
