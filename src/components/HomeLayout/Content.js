import React from "react";
import { Row, Col } from "antd";

import img2 from "@images/c2.jpg";
//import img3 from "@images/c3.jpg";
import ImageCarousel from "./ImageCarousel";


import { useTranslation } from 'react-i18next';

import { galleryLink } from "@utils/constants";



const Content = () => {
  const caurosalData = [
    {
      text: "img-2",
      url: img2,
    },
  ];

  const [t] = useTranslation();
  const styleObj = {
    position: "absolute",
    color: "white",
    bottom: "1vw",
    right: "2vw",
  };

  return (
    <>
      <Row style={{ marginTop: "1vh" }}>
        <Col lg={8} md={24} sm={24}>
          <div className="caption-co">
            <Row className="text-large">{t('donate')}</Row>
            <Row className="text-large margin-adjust">{t('support')}</Row>
            <Row className="text-large margin-adjust">{t('volunteer')}.</Row>
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
          {t("content_about_ktk")}
        </Col>
      </Row>
    </>
  );
};

export default Content;
