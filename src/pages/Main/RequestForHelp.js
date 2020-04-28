import React from "react";
import RequestForHelpForm from "@components/VolunteerForm/RequestForHelpForm";
import { connector } from "@store/requestForHelp";
import options from "@utils/Options";
import { useTranslation } from "react-i18next";

const RequestForHelp = ({ reset, save }) => {
  const initialValues = { region: ["KA", "5"] };

  const handleSubmit = (formData) => {
    formData["act"] = "request";
    save(formData);
  };
  const [t] = useTranslation();
  return (
    <div style={{ textAlign: "left" }}>
      <h2>{t("common.request_for_help")}</h2>
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
