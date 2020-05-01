import React from "react";
import { Row, Col } from "antd";

import StateLogo from "@images/state-logo.png";
import cmIMG from "@images/cm-img.png";

const Header = () => (
  <Row>
    <Col span={24} className="layout-header">
      <Row>
        <Col lg={6} md={6} sm={8} xs={8} className="state-image-container">
          <img src={StateLogo} className="state-logo" alt="Karnataka Gov" />
          <br />
        </Col>
        <Col
          lg={12}
          md={12}
          sm={8}
          xs={8}
          style={{
            position: "relative",
            top: -10,
          }}
        >
          <div className="logo-banner">Sankalpa</div>
          <div className="header-text">#karnatakafightscorona</div>
        </Col>
        <Col lg={6} md={6} sm={8} xs={8} className="cm-image-container">
          <img src={cmIMG} className="cm-logo" />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Header;
