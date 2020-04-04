import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { formItemLayout, tailFormItemLayout } from "./layout";

import {
  ProfessionSelect,
  GenderSelect,
  RegionSelect,
  MedicalField,
  NonMedicalField,
} from "./SelectFields";

import {
  MobileField,
  ConfirmMobileField,
  AddressField,
  PinField,
  NameField,
  EmailField,
  NotesField,
  AadharField,
} from "./InputFields";

import { DynamicServicList } from "./DynamicFields";

import { formatData } from "./utils";

function IndividualKindForm({
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

  const [medical, setMedical] = React.useState([]);
  const [nonMedical, setNonMedical] = React.useState([]);

  const getMetaMap = (meta) =>
    meta.map((m) => ({ id: m.key, value: m.children }));

  function onMedicalChange(values, meta) {
    const res = getMetaMap(meta);
    setMedical(res);
  }

  function onNonMedicalChange(values, meta) {
    const res = getMetaMap(meta);
    setNonMedical(res);
  }

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

        <GenderSelect options={other.genderOptions} />
        <AadharField />

        <MobileField />
        <ConfirmMobileField />

        <AddressField />
        <PinField />

        <ProfessionSelect options={domain.professionOptions} />

        <RegionSelect options={regions} />

        <MedicalField
          options={services.medicalOptions}
          onChange={onMedicalChange}
        />

        <DynamicServicList serviceType="medical" options={medical} />

        <NonMedicalField
          options={services.nonMedicalOptions}
          onChange={onNonMedicalChange}
        />
        <DynamicServicList serviceType="nonmedical" options={nonMedical} />

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

export default IndividualKindForm;
