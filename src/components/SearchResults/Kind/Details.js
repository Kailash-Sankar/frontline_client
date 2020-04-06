import React from "react";
import { Descriptions } from "antd";
import { getStringAttr } from "@utils/Parser/strUtils";
const { Item } = Descriptions;

function Details({ record }) {
  const renderExtra =
    record.mode.toLowerCase() == "individual"
      ? getIndividualDetails
      : getOrganizationDetails;

  return (
    <Descriptions title="Details" bordered>
      <Item label="Medical Services" span={2}>
        {getStringAttr(record.services.medical)}
      </Item>
      <Item label="Non-Medical Services" span={2}>
        {getStringAttr(record.services.nonmedical)}
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
    <Item key="org_person" label="Nodal Person">
      {rec.person}
    </Item>,
    <Item key="org_type" label="Type of Organization">
      {rec.cat}
    </Item>,
    <Item key="org_reg" label="Registration Number">
      {rec.reg}
    </Item>,
  ];
}

export default Details;
