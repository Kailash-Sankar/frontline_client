import React, { useEffect } from "react";
import { IndividualForm } from "@components/VolunteerForm";
import { connecter } from "@store/volunteerSignup";
import options from "@utils/Options";
import formatter from "@utils/Formatter";

function VolunteerSignup({ reset, mode, save }) {
  useEffect(() => {}, []);

  function handleSubmit(formData) {
    if (formData) {
      formData.mode = mode;
      formData.act = "volunteer"; // fixed page type

      formatter(formData);
      save(formData);
    }
  }

  // default to Karnataka, Bangalore
  const initialValues = {
    region: ["KA", "5"],
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Volunteer Signup Form</h2>
      <div style={{ marginTop: 30 }}>
        <IndividualForm
          onSubmit={handleSubmit}
          reset={reset}
          {...options}
          initialValues={initialValues}
        />
      </div>
    </div>
  );
}

export default connecter(VolunteerSignup);
