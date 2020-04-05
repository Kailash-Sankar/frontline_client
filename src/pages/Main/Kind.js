import React, { useEffect } from "react";
import {
  IndividualKindForm,
  OrganizationKindForm,
} from "@components/VolunteerForm";
import FormToggle from "@components/FormToggle";
import { connecter } from "@store/kind";
import options from "@utils/Options";
import formatter from "@utils/Formatter";

function Kind({ reset, mode, setMode, save }) {
  useEffect(() => {}, []);

  function handleSubmit(formData) {
    if (formData) {
      formData.mode = mode;
      formData.act = "kind";
      formatter(formData);
      console.log("after", formData);
      save(formData);
    }
  }

  // default to Karnataka, Bangalore
  const initialValues = {
    region: ["KA", "5"],
  };

  const formProps = {
    ...options,
    onSubmit: handleSubmit,
    reset: reset,
    initialValues: initialValues,
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Support in Kind</h2>
      <FormToggle
        value={mode}
        handleChange={setMode}
        options={options.other.modeOptions}
      />
      <div style={{ margin: 30 }}>
        {mode === "individual" ? (
          <IndividualKindForm {...formProps} />
        ) : (
          <OrganizationKindForm {...formProps} />
        )}
      </div>
    </div>
  );
}

export default connecter(Kind);
