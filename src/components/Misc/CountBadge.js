import React from "react";
import { Tag } from "antd";

function CountBadge({ individual = 0, organization = 0 }) {
  return (
    <div style={{ display: "inline-block" }}>
      <Tag color="green">Individual: {individual}</Tag>
      <Tag color="green">Organization: {organization}</Tag>
    </div>
  );
}

export default CountBadge;
