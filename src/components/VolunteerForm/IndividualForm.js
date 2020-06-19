import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { formItemLayout, tailFormItemLayout } from "./layout";

import { GenderSelect, RegionSelect, Expertise } from "./Fields/Select";

import {
  MobileField,
  ConfirmMobileField,
  AddressField,
  PinField,
  NameField,
  EmailField,
  DOBField,
  CityName,
  AadharField,
  OtherExpertise,
} from "./Fields/Input";

import { formatData } from "./utils";

function IndividualForm({ initialValues, other, regions, onSubmit, reset }) {
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

  const [expertise, setExpertise] = React.useState("");

  function onExpertiseChange(value) {
    setExpertise(value);
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
        <EmailField isRequired={true} />
        <DOBField isRequired={true} />
        <GenderSelect options={other.genderOptions} isRequired={true} />

        <MobileField />
        <ConfirmMobileField />

        <AadharField isRequired={true} />

        <AddressField />
        <CityName />
        <PinField />

        <RegionSelect options={regions} />

        <Expertise
          options={other.expertiseOptions}
          onChange={onExpertiseChange}
        />

        <OtherExpertise isVisible={expertise == "other"} />

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
