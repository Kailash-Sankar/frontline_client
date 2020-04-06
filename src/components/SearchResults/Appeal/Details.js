import React from "react";
import { Descriptions } from "antd";
//import { getStringAttr } from "@utils/Parser/strUtils";
const { Item } = Descriptions;

/*
  <Item label="Medical Services" span={2}>
    {getStringAttr(record.services.medical)}
  </Item>
  <Item label="Non-Medical Services" span={2}>
    {getStringAttr(record.services.nonmedical)}
  </Item>
*/

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
