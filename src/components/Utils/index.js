import React from "react";

export function Spacer({ width = 10 }) {
  return <div style={{ width: width, display: "inline-block" }}></div>;
}

export const formatDate = (dateString) => new Date(dateString).toLocaleString();
