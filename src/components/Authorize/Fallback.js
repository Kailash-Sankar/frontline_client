// define fallback messages/custom page content here
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Result } from "antd";

const Msg = () => (
  <div>You do not have sufficient rights to view this page</div>
);

const Page = () => {
  const history = useHistory();
  return (
    <Result
      status="403"
      title="Unauthorized"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={() => history.goBack()}>
          Go Back
        </Button>
      }
    />
  );
};

export default { Msg, Page };
