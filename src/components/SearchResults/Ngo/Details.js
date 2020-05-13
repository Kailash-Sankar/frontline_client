import React from "react";
import { Descriptions, Table } from "antd";
import { getString } from "@utils/Parser/strUtils";
const { Item } = Descriptions;

/**
 * The columns that has to be shown for the NGO report
 */
const columns = [
  {
    title: "Zone",
    dataIndex: "zone",
    key: "zone",
  },
  {
    title: "Ward",
    dataIndex: "ward",
    key: "ward",
  },
  {
    title: "Pins",
    dataIndex: "pincodes",
    key: "pincodes",
  },
];

/**
 * This function is used to render the expandable result section in the Ngo form
 * @param {*} param0 The records that are generated from the search query.
 */
function Details({ record }) {
  return (
    <Descriptions
      title="Details"
      bordered
      size="small"
      column={{ xs: 1, xl: 3, lg: 3, md: 3, sm: 2, xxl: 2 }}
    >
      <Item label="EMail">{getString(record.email)}</Item>
      <Item label="Alternate Mobile Number">{getString(record.alt_mob)}</Item>
      <Item label="Address">{record.address}</Item>
      <Item label="Regions">{getRegions(record)}</Item>
      <Item label="Reg No.">{getString(record.reg)}</Item>
      <Item label="Number Of Volunteers">{getString(record.nov)}</Item>
      <Item label="Zone Details">{getZoneDetails(record)}</Item>
    </Descriptions>
  );
}

/**
 * Formats the NGO regions properly so that it can be displated
 * @param {*} record
 */
function getRegions(record) {
  let res = null;

  if (record.region) {
    if (Array.isArray(record.region)) {
      res = record.region.join(", ");
    } else {
      res = record.region;
    }
  }
  return res;
}

function getZoneDetails(record) {
  return (
    <div>
      <Table columns={columns} dataSource={formatBbmpZoneInfo(record)} />
    </div>
  );
}

function formatBbmpZoneInfo(record) {
  const bbmp = new Array();
  if (record.bbmp) {
    record.bbmp.map((e) =>
      bbmp.push({
        zone: e.zone,
        ward: e.ward,
        pincodes: e.pincodes.join(", "),
        key: e._id,
      })
    );
  }
  return bbmp;
}
export default Details;
