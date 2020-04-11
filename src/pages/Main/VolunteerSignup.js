import React, { useEffect } from "react";
import { IndividualForm, OrganizationForm } from "@components/VolunteerForm";
import FormToggle from "@components/FormToggle";
import { connecter } from "@store/volunteerSignup";
import options from "@utils/Options";
import formatter from "@utils/Formatter";

function VolunteerSignup({ reset, mode, setMode, save }) {
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
      <FormToggle
        value={mode}
        handleChange={setMode}
        options={options.other.modeOptions}
      />
      <div style={{ marginTop: 30 }}>
        {mode === "individual" ? (
          <IndividualForm
            onSubmit={handleSubmit}
            reset={reset}
            {...options}
            initialValues={initialValues}
          />
        ) : (
          <OrganizationForm
            onSubmit={handleSubmit}
            reset={reset}
            {...options}
            initialValues={initialValues}
          />
        )}
      </div>
    </div>
  );
}

export default connecter(VolunteerSignup);
