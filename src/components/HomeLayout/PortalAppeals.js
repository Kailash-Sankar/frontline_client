import React from "react";
import { List, Badge, Tag } from "antd";
import { getStringAttr } from "@utils/Parser/strUtils";

const renderRow = (label, rowData) => {
  return (
    <span>
      {label}: <Tag>{getStringAttr(rowData)}</Tag>
    </span>
  );
};

const PortalAppeals = (props) => {
  const RenderItem = (data) => {
    return (
      <List.Item
        onClick={() => props.appealClick(data._id)}
        style={{ cursor: "pointer" }}
      >
        <Badge status="processing" />
        We need the following supplies,
        <div>{renderRow("Medical", data.services.medical)}</div>
        <div>{renderRow("Non-Medical", data.services.nonmedical)}</div>
        at {data.region}
      </List.Item>
    );
  };
  return (
    <div>
      <h2 className="appeals-header">Appeals</h2>
      <div
        style={{
          textAlign: "left",
          maxHeight: "450px",
          overflowY: "auto",
          fontSize: "12px",
        }}
        className="appeals-data"
      >
        <List
          size="small"
          dataSource={props.appealsData}
          renderItem={(item) => RenderItem(item)}
        />
      </div>
    </div>
  );
};

export default PortalAppeals;
