import React from "react";
import { Descriptions } from "antd";
const { Item } = Descriptions;

function Details({ record }) {
  return (
    <Descriptions>
      <Item label="Address">{record.address}</Item>
      <Item label="Pin Code">{record.pin}</Item>
      <Item label="Area">{record.area}</Item>
    </Descriptions>
  );
}

export default Details;
