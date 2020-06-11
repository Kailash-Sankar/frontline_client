import React from "react";
import { Row, Col } from "antd";

import img2 from "@images/c2.jpg";
//import img3 from "@images/c3.jpg";
import ImageCarousel from "./ImageCarousel";

const Content = () => {
  const caurosalData = [
    {
      text: "img-2",
      url: img2,
    },
  ];

  return (
    <>
      <Row style={{ marginTop: "1vh", paddingLeft: "1%" }}>
        <Col lg={8} md={24} sm={24}>
          <div className="caption-co">
            <Row className="text-large">DONATE.</Row>
            <Row className="text-large margin-adjust">SUPPORT.</Row>
            <Row className="text-large margin-adjust">VOLUNTEER.</Row>
          </div>
        </Col>
        <Col
          lg={16}
          md={24}
          sm={24}
          style={{ overflow: "hidden", width: "100%" }}
        >
          <ImageCarousel caurosalData={caurosalData} imageWidth="95%" />
        </Col>
      </Row>
      <Row>
        <Col className="home-text-message">
          Karnataka! While we gave our nation a global pedestal and millions
          their dream jobs, we also strive to make sure that no one sleeps
          hungry, no one is denied basic amenities and healthcare, no one feels
          helpless. This is the call of humanity we answer every single day.
          Today, when the world is fighting an unprecedented fight for survival,
          the call just got louder. Let&apos;s do it yet again, our way -
          Humane! Unique! Effective!
        </Col>
      </Row>
    </>
  );
};

export default Content;
