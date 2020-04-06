import React from "react";
import { Descriptions } from "antd";
const { Item } = Descriptions;

const Details = ({ record }) => {
    return (
        <Descriptions>
            <Item label="Address">{record.address}</Item>
            <Item label="Pin Code">{record.pin}</Item>
            <Item label="Region">{record.area}</Item>
            <Item label="Desc">{record.desc}</Item>
        </Descriptions>
    );
}

export default Details;