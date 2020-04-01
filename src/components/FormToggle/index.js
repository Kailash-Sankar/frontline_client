import React from "react";
import { Radio } from "antd";
import { DeploymentUnitOutlined, UserOutlined } from "@ant-design/icons";
import { Spacer } from "@components/Utils";

const iconMap = {
  organization: DeploymentUnitOutlined,
  individual: UserOutlined
};

// defined here temporarily
const renderIcon = (id) => {
  let Icon = () => <span></span>;
  if (id in iconMap) {
    Icon = iconMap[id];
  }
  return <Icon />;
};

function FormToggle({ value, handleChange, options }) {
  function onChange(e) {
    handleChange(e.target.value);
  }

  return (
    <div>
      <Radio.Group value={value} buttonStyle="solid" onChange={onChange}>
        {options.map((o) => (
          <Radio.Button key={o.id} value={o.id}>
            {renderIcon(o.id)}
            <Spacer />
            {o.value}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
}

export default FormToggle;
