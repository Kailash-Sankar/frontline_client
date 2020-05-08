import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { formItemLayout, tailFormItemLayout } from "./layout";

import { MultipleDistrictSelect, UrbanOperationalArea } from "./Fields/Select";

import {
  MobileField,
  EmailField,
  NodalNameField,
  NgoNameField,
  RegNumField,
  NOVField,
  Covid19Field,
  AddressField,
} from "./Fields/Input";

import { formatData } from "./utils";

function NgoForm({ initialValues, regions, urban, onSubmit, reset }) {
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

  const [district, setDistrict] = React.useState(
    initialValues.meta.district || []
  );

  function onDistrictChange(value) {
    setDistrict(value);
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
        <EmailField isRequired={true} />
        <NgoNameField />

        <RegNumField nameVal={"reg"} isRequired={true} />

        <NodalNameField nameVal={"person"} />

        <MobileField
          label="Contact Number"
          name="mobile"
          placeholder="Enter your contact number"
        />

        <MobileField
          label="Alternate Contact Number"
          name="alt_mob"
          placeholder="Enter your alternate contact number"
        />

        <AddressField />

        <MultipleDistrictSelect
          options={regions.find((x) => x.id === "17").children}
          onChange={onDistrictChange}
          nameVal={"region"}
        />

        <UrbanOperationalArea
          options={urban}
          isVisible={district.includes("5")}
        />

        <Covid19Field />
        <NOVField isRequired={true} nameVal={"nov"} />

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NgoForm;
