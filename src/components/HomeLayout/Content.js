import React from "react";
import { Row, Col } from "antd";
import carousel3 from "@images/carousel-3.jpg";
import ImageCarousel from "./ImageCarousel";
import { useTranslation } from 'react-i18next';

const Content = () => {
  const caurosalData = [
    {
      text: "img-3",
      url: carousel3,
    },
  ];
  const [t] = useTranslation();
  return (
    <>
      <Row style={{ marginTop: "1vh" }}>
        <Col lg={8} md={24} sm={24}>
          <div className="caption-co">
            <Row className="text-large">DONATE.</Row>
            <Row className="text-large margin-adjust">SUPPORT.</Row>
            <Row className="text-large margin-adjust">VOLUNTEER.</Row>
          </div>
        </Col>
        <Col lg={16} md={24} sm={24} style={{ overflow: "hidden" }}>
          <ImageCarousel caurosalData={caurosalData} imageWidth="95%" />
        </Col>
      </Row>
      <Row>
        <Col className="home-text-message">
          {t("content_about_ktk")}
        </Col>
      </Row>
    </>
  );
};

export default Content;
