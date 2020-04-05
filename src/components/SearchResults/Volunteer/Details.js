import React from "react";
import { Descriptions } from "antd";
import { getString } from "@utils/Parser/strUtils";
const { Item } = Descriptions;

function Details({ record }) {
  const renderExtra =
    record.mode.toLowerCase() == "individual"
      ? getIndividualDetails
      : getOrganizationDetails;

  return (
    <Descriptions title="Details" bordered size="middle">
      <Item label="Essential Services" span={3}>
        {getString(record.services.essential)}
      </Item>
      <Item label="Health Services" span={3}>
        {getString(record.services.health)}
      </Item>
      <Item label="Communication Services" span={3}>
        {getString(record.services.communications)}
      </Item>
      <Item label="Entrepreneurial Services" span={3}>
        {getString(record.services.entrepreneurial)}
      </Item>

      <Item label="Address">{record.address}</Item>
      <Item label="Pin Code">{record.pin}</Item>

      {renderExtra(record)}
    </Descriptions>
  );
}

function getIndividualDetails(record) {
  const rec = record.individual;
  return [
    <Item key="qualification" label="Educational Qualification">
      {rec.qualification}
    </Item>,
    <Item key="profession" label="Profession">
      {rec.profession}
    </Item>,
    <Item key="gender" label="Gender">
      {rec.gender}
    </Item>,
    <Item key="dob" label="Date of Birth">
      {rec.dob}
    </Item>,
  ];
}

function getOrganizationDetails(record) {
  const rec = record.organization;
  return [
    <Item key="org_head" label="Head of Organization">
      {rec.head}
    </Item>,
    <Item key="org_person" label="Nodal Person">
      {rec.person}
    </Item>,
    <Item key="org_type" label="Type of Organization">
      {rec.cat}
    </Item>,
    <Item key="org_nov" label="Number of Volunteers">
      {rec.nov}
    </Item>,
    <Item key="org_reg" label="Registration Number">
      {rec.reg}
    </Item>,
  ];
}

export default Details;
