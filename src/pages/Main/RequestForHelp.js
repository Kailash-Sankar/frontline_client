import React from "react";
import RequestForHelpForm from "@components/VolunteerForm/RequestForHelpForm";
import { connector } from "@store/requestForHelp";
import options from "@utils/Options";

const RequestForHelp = ({ reset, save }) => {
  const initialValues = { region: ["KA", "5"], nop: "1" };

  const handleSubmit = (formData) => {
    formData["act"] = "request";
    save(formData);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Request for Help</h2>
      <div style={{ marginTop: 30 }}>
        <RequestForHelpForm
          reset={reset}
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          options={options.regions}
        />
      </div>
    </div>
  );
};

export default connector(RequestForHelp);
