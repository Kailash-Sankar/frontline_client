import React, { useEffect } from "react";
import { NgoForm } from "@components/VolunteerForm";
import { connecter } from "@store/ngoSignup";
import options from "@utils/Options";
import formatter from "@utils/Formatter";

function NgoSignup({ reset, save }) {
  useEffect(() => {}, []);

  function handleSubmit(formData) {
    if (formData) {
      formData.act = "ngo"; // fixed page type

      formatter(formData);
      save(formData);
    }
  }

  // default to Karnataka, Bangalore
  const initialValues = {
    region: [],
    meta: {},
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>NGO Signup Form</h2>
      <div style={{ marginTop: 30 }}>
        <NgoForm
          onSubmit={handleSubmit}
          reset={reset}
          {...options}
          initialValues={initialValues}
        />
      </div>
    </div>
  );
}

export default connecter(NgoSignup);
