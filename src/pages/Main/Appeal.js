import React from "react";
import AppealForm from "@components/VolunteerForm/AppealForm";
import options from "@utils/Options";
import formatter from "@utils/Formatter";
import { connecter } from "@store/appeal";

function Appeal({ save, reset }) {
  // default to Karnataka, Bangalore
  const initialValues = {
    region: ["KA", "5"],
  };

  function handleSubmit(formData) {
    if (formData) {
      formData.act = "appeal";
      formatter(formData);
      save(formData);
    }
  }

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Post Appeals</h2>
      <div style={{ marginTop: 30 }}>
        <AppealForm
          {...options}
          onSubmit={handleSubmit}
          initialValues={initialValues}
          reset={reset}
        />
      </div>
    </div>
  );
}

export default connecter(Appeal);
