import React, { useEffect } from "react";
import { Form, Button } from "antd";

import {
  MedicalField,
  NonMedicalField,
  RegionSelect,
} from "@components/VolunteerForm/Fields/Select";

import { PinField } from "@components/VolunteerForm/Fields/Input";

import { DynamicServicList } from "@components/VolunteerForm/Fields/Dynamic";

import { AppealField, TagField } from "./Fields";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function AppealForm({ onSubmit, reset, regions, services, initialValues }) {
  const [form] = Form.useForm();
  const { resetFields } = form;

  useEffect(() => {
    resetFields();
  }, [reset]);

  const [medical, setMedical] = React.useState([]);
  const [nonMedical, setNonMedical] = React.useState([]);

  const onFinish = (values) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("form error", errorInfo);
  };

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

  return (
    <Form
      form={form}
      {...layout}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <RegionSelect options={regions} />
      <PinField />

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

      <AppealField />
      <TagField />

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AppealForm;
