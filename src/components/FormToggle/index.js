import React from "react";
import { Radio } from "antd";
import { DeploymentUnitOutlined, UserOutlined } from "@ant-design/icons";
import { Spacer } from "@components/Utils";

function FormToggle({ value, handleChange }) {
  function onChange(e) {
    handleChange(e.target.value);
  }

  return (
    <div>
      <Radio.Group value={value} buttonStyle="solid" onChange={onChange}>
        <Radio.Button value="individual">
          <UserOutlined />
          <Spacer />
          Individual
        </Radio.Button>
        <Radio.Button value="organization">
          <DeploymentUnitOutlined />
          <Spacer />
          Organization
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default FormToggle;
