import React, { useEffect, useState } from "react";
import {
  IndividualKindForm,
  OrganizationKindForm,
} from "@components/VolunteerForm";
import FormToggle from "@components/FormToggle";
import { connecter } from "@store/kind";
import options from "@utils/Options";
import lookup from "@utils/Parser/lookup";
import formatter from "@utils/Formatter";

export const revFormatData = (data) => {
  const meta = {};
  const services = {};

  data.forEach((service) => {
    const s = { id: [], values: {} };

    service.values.forEach((d) => {
      const itemId = d.id;
      s.id.push(itemId);
      s.values[itemId] = d.attributes;
    });
    // build meta data
    meta[service.id] = s.id.map((item) => lookup.services[service.id][item]);
    // build service results
    services[service.id] = s;
  });

  return { services, meta };
};

function Kind({ reset, mode, setMode, save, appeal = null }) {
  const [pause, setPause] = useState(true);

  // default to Karnataka, Bangalore
  const [initialValues, setinitialValues] = useState({
    region: ["KA", "5"],
    meta: {},
  });

  useEffect(() => {
    if (appeal) {
      const appealValues = revFormatData(appeal.services);
      setinitialValues(appealValues);
    }
    setPause(false);
  }, [appeal]);

  function handleSubmit(formData) {
    if (formData) {
      // preset vaules
      formData.mode = mode;
      formData.act = "kind";
      // link to appeal
      if (appeal && appeal._id) {
        formData.ref = { appeal_id: appeal._id };
      }
      formatter(formData);
      save(formData);
    }
  }

  const formProps = {
    ...options,
    onSubmit: handleSubmit,
    reset: reset,
    initialValues: initialValues,
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Support in Kind</h2>
      {pause ? (
        <div> Loading... </div>
      ) : (
        <div>
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
      )}
    </div>
  );
}

export default connecter(Kind);
