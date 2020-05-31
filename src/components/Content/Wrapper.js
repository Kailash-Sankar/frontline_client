import React from "react";
import { Row, Col } from "antd";

const Wrapper = ({ children }) => {
  return (
    <Row style={{ marginTop: "1vh", paddingLeft: "1%", flex: 1 }}>
      <Col className="home-text-message">{children}</Col>
    </Row>
  );
};

export default Wrapper;
