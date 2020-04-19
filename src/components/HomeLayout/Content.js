import React from "react";
import { Row, Col } from "antd";
import carousel3 from "@images/carousel-3.jpg";
import ImageCarousel from "./ImageCarousel";

const Content = () => {
  const caurosalData = [
    {
      text: "img-3",
      url: carousel3,
    },
  ];

  return (
    <Row style={{ marginTop: "10vh" }}>
      <Col lg={8} md={24} sm={24}>
        <div className="caption-co">
          <Row className="text-large">DONATE.</Row>
          <Row className="text-large margin-adjust">SUPPORT.</Row>
          <Row className="text-large margin-adjust">VOLUNTEER.</Row>
          <Row>
            <Col className="home-text-message">
              Karnataka! While we gave our nation a global pedestal and millions
              their dream jobs, we also strive to make sure that no one sleeps
              hungry, no one is denied basic amenties and healthcare, no one
              feels helpless. This is the call of humanity we answer every
              single day. Today, when the world is fighting an unprecedented
              fight for survival, the call just got louder. Let&apos;s do it yet
              again, our way - Humane! Unique! Effective!
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={16} md={24} sm={24}>
        <ImageCarousel caurosalData={caurosalData} imageWidth="95%" />
      </Col>
    </Row>
  );
};

export default Content;
