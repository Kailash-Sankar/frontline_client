import React from "react";

export function Spacer({
  width = 10,
  height = "auto",
  display = "inline-block"
}) {
  return <div style={{ width: width, display: display, height: height }}></div>;
}

export const formatDate = (dateString) => new Date(dateString).toLocaleString();
