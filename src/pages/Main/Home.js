import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Spacer } from "@components/Utils";
import { Link } from "react-router-dom";
import {
  ImageCarousel,
  PortalAppeals,
  Statistics,
} from "@components/HomeLayout";
import { ArrowRightOutlined } from "@ant-design/icons";
import { connector } from "@store/homeContent";
import background from "../../images/background.png";
import StateLogo from "../../images/state-logo.png";
import cmIMG from "../../images/cm-img.png";
import carousel1 from "../../images/carousel-1.png";
import carousel2 from "../../images/carousel-2.png";
import carousel3 from "../../images/carousel-3.jpg";
import carousel4 from "../../images/carousel-4.jpg";

const HomePage = (props) => {
  // fetch top 10 appeals
  useEffect(() => {
    props.fetchAppeals({
      query: {},
      limit: 10,
    });
  }, []);

  console.log("home appeals", props.appeals);

  const caurosalData = [
    {
      text: "img-3",
      url: carousel3,
    },

    {
      text: "img-4",
      url: carousel4,
    },
    {
      text: "img-1",
      url: carousel1,
    },

    {
      text: "img-2",
      url: carousel2,
    },
  ];

  const covidStats = [
    {
      title: "INDIA COVID-19",
      confirmed: 2897,
      active: 2616,
      recovered: 206,
      deceased: 75,
    },
    {
      title: "KARNATAKA COVID-19",
      confirmed: 128,
      active: 114,
      recovered: 11,
      deceased: 3,
    },
  ];

  const appeals = [
    "Hi, we are in need of 100 masks, 1kg Dhal, 1Kg rice to Bangalore murugespalaya region.",
    "Hi, we are in need of 100 masks, 1kg Dhal, 1Kg rice to Bangalore murugespalaya region.",
    "Hi, we are in need of 100 masks, 1kg Dhal, 1Kg rice to Bangalore murugespalaya region.",
    "Hi, we are in need of 100 masks, 1kg Dhal, 1Kg rice to Bangalore murugespalaya region.",
  ];

  const onClickAppeal = (appealData) => {
    props.setSelAppeals(appealData);
  };

  return (
    <Row
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="layout-conteiner"
    >
      <Col lg={18} xs={24} sm={24} md={18} className="gutter-row">
        <Row>
          <Col span={24} className="layout-header">
            <Row>
              <Col lg={3} md={3} sm={12} xs={12}>
                <img src={StateLogo} className="state-logo" />
              </Col>
              <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="header-text hashtag-1"
              >
                #fightcovid19
              </Col>
              <Col
                lg={11}
                md={11}
                sm={12}
                xs={12}
                className="cm-image-container"
              >
                <span className="header-text hashtag-2">#donatemadona</span>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12} className="cm-image-container">
                <img src={cmIMG} className="cm-logo" />
              </Col>
            </Row>
          </Col>
        </Row>

        <Spacer display="block" height={40} />
        <Row>
          <Col span={24} className="text-large">
            DONATE.
          </Col>
          <Col span={24} className="text-large margin-adjust">
            SUPPORT.
          </Col>
          <Col span={24} className="text-large margin-adjust">
            VOLUNTEER.
          </Col>
        </Row>
        <Spacer display="block" height={20} />
        <Row>
          <Col span={24}>
            <ImageCarousel caurosalData={caurosalData} imageWidth="95%" />
          </Col>
        </Row>
      </Col>
      <Col lg={6} sm={24} xs={24} md={6} className="gutter-row right-conteiner">
        <Statistics covidStats={covidStats} />

        <Row style={{ padding: "5px" }}>
          <Col span="24">
            <PortalAppeals appealsData={appeals} appealClick={onClickAppeal} />
          </Col>
        </Row>
      </Col>
      <Spacer display="block" height={20} />
      <Col span={24}>
        <Row>
          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers">
            <span className="goto-text">
              DONATE FUNDS <ArrowRightOutlined />
            </span>
            <br />
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          </Col>
          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers2">
            <span className="goto-text">
              SUPPORT IN KIND <ArrowRightOutlined />
            </span>
            <br />
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          </Col>
          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers">
            <Link to="/volunteer">
              <span className="goto-text">
                VOLUNTEER <ArrowRightOutlined />
              </span>
              <br />
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            </Link>
          </Col>
        </Row>
      </Col>
      <Spacer display="block" height={20} />
      <Col span={24}>
        <Row>
          <Col
            md={3}
            lg={3}
            sm={12}
            xs={12}
            style={{ paddingLeft: "5px", marginBottom: "10px" }}
          >
            <h3 style={{ marginBottom: "0px" }}>CONTACT DETAILS</h3>
            <h3>TO GET INVOLVED:</h3>
          </Col>
          <Col md={4} lg={4} sm={12} xs={12} className="border-right">
            Phone
            <br />
            080-22284420
          </Col>
          <Col
            md={7}
            lg={7}
            sm={24}
            xs={24}
            className="border-right"
            style={{ paddingLeft: "8px", marginBottom: "10px" }}
          >
            Whatsapp
            <br />
            7760802872 / 8142941915
          </Col>
          <Col md={10} lg={10} sm={24} xs={24} style={{ paddingLeft: "8px" }}>
            Email
            <br />
            <a
              href="mailto:kafightskorona@karnataka.gov"
              style={{ color: "#fff" }}
            >
              kafightskorona@karnataka.gov
            </a>{" "}
            /
            <a
              href="mailto:karnatakafightscorona@gmail.com"
              style={{ color: "#fff" }}
            >
              {" "}
              karnatakafightscorona@gmail.com
            </a>
          </Col>
        </Row>
      </Col>
      <Spacer display="block" height={15} />
    </Row>
  );
};

export default connector(HomePage);
