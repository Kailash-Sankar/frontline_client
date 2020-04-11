import React from "react";
import { Button } from "antd";

// TODO:  accept style instead of applyting top
function ExportButton({ onClick }) {
  return (
    <Button onClick={onClick} style={{ top: -45 }}>
      Export (csv)
    </Button>
  );
}

export default ExportButton;
