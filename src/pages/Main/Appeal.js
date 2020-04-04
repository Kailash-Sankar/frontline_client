import React from "react";
import AppealForm from "@components/AppealForm";

function Appeal() {
  return (
    <div style={{ textAlign: "left" }}>
      <h2>Post Appeals</h2>
      <div style={{ marginTop: 20 }}>
        <AppealForm />
      </div>
    </div>
  );
}

export default Appeal;
