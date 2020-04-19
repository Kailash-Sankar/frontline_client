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
              The global coronavirus outbreak has forced all of us away from our
              everyday lives. Although apart, we are all in this fight together.
              The Government of Karnataka urges you to step forward and help us
              provide food for relief and healthcare for those in need.
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
