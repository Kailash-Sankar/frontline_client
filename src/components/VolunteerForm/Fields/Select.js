import React from "react";
import { Form, Select, Cascader, Button, TreeSelect } from "antd";
import { specLink } from "@utils/constants";
const { Option } = Select;

const renderOptions = (options) =>
  options.map((k) => <Option key={k.id}>{k.value || k.name}</Option>);

const renderOptionsObject = (options) =>
  Object.values(options).map((k) => (
    <Option key={k.id}>{k.value || k.name}</Option>
  ));

const renderOptionsLabel = (options) =>
  Object.values(options).map((k) => (
    <Option key={k.value}>{k.label || k.name}</Option>
  ));

export const RegionSelect = ({ options }) => (
  <Form.Item
    label="Region"
    name="region"
    rules={[{ required: true, message: "Region is required" }]}
  >
    <Cascader placeholder="Select your region" options={options} />
  </Form.Item>
);

export const StateSelect = ({ options }) => (
  <Form.Item
    label="State"
    name="state"
    rules={[{ required: true, message: "State is required" }]}
  >
    <Select placeholder="Select a value">{renderOptions(options)}</Select>
  </Form.Item>
);

export const AvailabilitySelect = ({ options }) => (
  <Form.Item
    label="Availability"
    name="availability"
    rules={[{ required: true, message: "Availability is required" }]}
  >
    <Select placeholder="Select a value">{renderOptions(options)}</Select>
  </Form.Item>
);

export const QualificationSelect = ({ options }) => (
  <Form.Item
    label="Educational Qualification"
    name={["individual", "qualification"]}
    rules={[{ required: true, message: "Qualification is required" }]}
  >
    <Select placeholder="Select a value">{renderOptions(options)}</Select>
  </Form.Item>
);

export const ProfessionSelect = ({ options }) => (
  <Form.Item
    label="Profession"
    name={["individual", "profession"]}
    rules={[{ required: true, message: "Profession is required" }]}
  >
    <Select placeholder="Select a value">{renderOptions(options)}</Select>
  </Form.Item>
);

export const GenderSelect = ({ options }) => (
  <Form.Item label="Gender" name={["individual", "gender"]}>
    <Select placeholder="Select a value">{renderOptions(options)}</Select>
  </Form.Item>
);

export const OrgTypeSelect = ({ options }) => (
  <Form.Item
    label="Type of Organization"
    name={["organization", "cat"]}
    rules={[{ required: true, message: "Organization type is required" }]}
  >
    <Select placeholder="Select a value">{renderOptions(options)}</Select>
  </Form.Item>
);

export const SpecLink = () => {
  return (
    <div>
      <a href={specLink} target="_new">
        <Button type="link">Approved Specifications</Button>
      </a>
    </div>
  );
};

export const MedicalField = ({ options, onChange }) => (
  <Form.Item name={["services", "medical", "id"]} label="Medical Supplies">
    <Select mode="multiple" onChange={onChange}>
      {renderOptionsObject(options)}
    </Select>
    <SpecLink />
  </Form.Item>
);

export const NonMedicalField = ({ options, onChange }) => (
  <Form.Item
    name={["services", "nonmedical", "id"]}
    label="Food &amp; Essential Supplies"
  >
    <Select mode="multiple" onChange={onChange}>
      {renderOptionsObject(options)}
    </Select>
  </Form.Item>
);

export const MultipleDistrictSelect_OLD = ({
  options,
  onChange,
  nameVal = ["services", "operationalArea", "value"],
}) => (
  <Form.Item
    name={nameVal}
    label="District of Operation"
    rules={[
      {
        required: true,
        message: "Please select at least one operational area",
      },
    ]}
  >
    <Select
      mode="multiple"
      placeholder="multiple options can be selected"
      onChange={onChange}
    >
      {renderOptionsLabel(options)}
    </Select>
  </Form.Item>
);

export const MultipleDistrictSelect = ({
  options,
  onChange,
  nameVal = ["services", "operationalArea", "value"],
}) => (
  <Form.Item
    name={nameVal}
    label="District of Operation"
    rules={[
      {
        required: true,
        message: "Please select at least one operational area",
      },
    ]}
  >
    <TreeSelect
      {...{
        treeData: options,
        onChange: onChange,
        treeCheckable: true,
        showCheckedStrategy: TreeSelect.SHOW_PARENT,
        placeholder: "Multiple/All options can be selected",
      }}
      treeDefaultExpandAll
    />
  </Form.Item>
);

export const UrbanOperationalArea = ({
  options,
  onChange,
  isVisible = false,
}) =>
  isVisible ? (
    <Form.Item label="Name of Area(s) of Operations" name="bbmp">
      <TreeSelect
        {...{
          treeData: options,
          onChange: onChange,
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          placeholder: "Please select operational areas",
        }}
      />
    </Form.Item>
  ) : (
    ""
  );
