import React from "react";
import AppealForm from "@components/AppealForm";
import options from "@utils/Options";

function Appeal() {
  return (
    <div style={{ textAlign: "left" }}>
      <h2>Post Appeals</h2>
      <div style={{ marginTop: 20 }}>
        <AppealForm {...options} />
      </div>
    </div>
  );
}

export default Appeal;
