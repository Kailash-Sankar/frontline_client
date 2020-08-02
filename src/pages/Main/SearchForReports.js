import React from "react";
import SearchWithMobile from "../Reports/SearchWithMobile";
import RequestForHelp from "./RequestForHelp";
//import AppealReport from "../Reports/AppealReport";
import FormToggle from "@components/FormToggle";
import { Spacer } from "@components/Utils";
import { Typography } from "antd";
const { Title } = Typography;

const reportsMap = {
  createHelpRequest: {
    id: "createHelpRequest",
    value: "Create help request",
    render: RequestForHelp,
  },
  previousRequests: {
    id: "previousRequests",
    value: "Previous requests",
    render: SearchWithMobile,
  },
};

const Placeholder = () => (
  <div>
    <Spacer height={25} display="block" />
    <Title level={4}>Please select one of the above</Title>
  </div>
);

const RenderPage = ({ type }) => {
  const PageToRender =
    type in reportsMap ? reportsMap[type].render : Placeholder;
  return <PageToRender />;
};

function SearchForReports() {
  const [type, setType] = React.useState("createHelpRequest");
  function onTypeChange(value) {
    // update for new state option
    setType(value);
  }

  return (
    <div>
      <FormToggle
        options={Object.values(reportsMap)}
        handleChange={onTypeChange}
        value={type}
      />
      <div>
        <RenderPage type={type} />
      </div>
    </div>
  );
}

export default SearchForReports;
