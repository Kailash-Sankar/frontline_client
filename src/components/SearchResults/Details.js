import React from "react";
import { Descriptions } from "antd";
const { Item } = Descriptions;

function Details({ record }) {
  const renderExtra =
    record.mode.toLowerCase() == "individual"
      ? getIndividualDetails
      : getOrganizationDetails;

  return (
    <Descriptions title="User Info">
      <Item label="Availability">{record.availability}</Item>

      <Item label="Essential Services"> {record.service_essential} </Item>
      <Item label="Health Services"> {record.service_health} </Item>
      <Item label="Communication Services">
        {record.service_communications}
      </Item>
      <Item label="Entrepreneurial Services">
        {record.service_entrepreneurial}
      </Item>

      <Item label="Address">{record.address}</Item>
      <Item label="Pin Code">{record.pin}</Item>

      {renderExtra(record)}
    </Descriptions>
  );
}

function getIndividualDetails(record) {
  return [
    <Item key="qualification" label="Educational Qualification">
      {record.qualification}
    </Item>,
    <Item key="profession" label="Profession">
      {record.profession}
    </Item>,
    <Item key="gender" label="Gender">
      {record.gender}
    </Item>,
    <Item key="dob" label="Date of Birth">
      {record.dob}
    </Item>
  ];
}

function getOrganizationDetails(record) {
  return [
    <Item key="org_head" label="Head of Organization">
      {record.org_head}
    </Item>,
    <Item key="org_person" label="Nodal Person">
      {record.org_person}
    </Item>,
    <Item key="org_type" label="Type of Organization">
      {record.org_type}
    </Item>,
    <Item key="org_nov" label="Number of Volunteers">
      {record.org_nov}
    </Item>,
    <Item key="org_reg" label="Registration Number">
      {record.org_reg}
    </Item>
  ];
}

export default Details;
