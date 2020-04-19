import React, { useEffect, useState } from "react";
import { Row, Col, Affix, Button } from "antd";
import { Spacer } from "@components/Utils";
import Footer from "@components/Footer";
import { Link } from "react-router-dom";
import {
  ImageCarousel,
  Statistics,
  PaymentModal,
  VolunteerModal,
  TwitterWidget,
} from "@components/HomeLayout";

import { connector } from "@store/homeContent";
import axios from "axios";

import background from "@images/background.png";
import StateLogo from "@images/state-logo.png";
import cmIMG from "@images/cm-img.png";
import carousel3 from "@images/carousel-3.jpg";
import donateIco from "@images/donate_ico.png";
import supportIco from "@images/support_ico.png";
import volunteerIco from "@images/volunteer_ico.png";
import helpIco from "@images/help_ico.png";

const HomePage = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showVolunteerModal, setshowVolunteerModal] = useState(false);
  useEffect(() => {
    props.fetchAppeals();

    const getCovidData = async () => {
      let covidData = [];
      try {
        const data = await axios.get("https://api.covid19india.org/data.json");
        data.data.statewise.forEach((element) => {
          if (
            element.state &&
            (element.state == "Total" || element.state == "Karnataka")
          ) {
            element.title =
              element.state == "Total"
                ? "INDIA COVID-19"
                : "KARNATAKA COVID-19";
            covidData.push(element);
          }
        });
      } catch {
        covidData = [];
      }
      props.setStats(covidData);
    };

    getCovidData();
  }, []);

  const caurosalData = [
    {
      text: "img-3",
      url: carousel3,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url(" + background + ")",
      }}
      className="layout-conteiner"
    >
      <Row>
        <Col lg={18} xs={24} sm={24} md={18} className="gutter-row">
          <PaymentModal showModal={showModal} setShowModal={setShowModal} />
          <VolunteerModal
            showModal={showVolunteerModal}
            setShowModal={setshowVolunteerModal}
          />

          <Row>
            <Col span={24} className="layout-header">
              <Row>
                <Col
                  lg={6}
                  md={6}
                  sm={8}
                  xs={8}
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={StateLogo}
                    className="state-logo"
                    alt="Karnataka Gov"
                  />
                  <br />
                </Col>
                <Col lg={12} md={12} sm={8} xs={8}>
                  <div className="logo-banner">Sankalpa</div>
                  <div className="header-text">#karnatakafightscorona</div>
                </Col>
                <Col lg={6} md={6} sm={8} xs={8} className="cm-image-container">
                  <img src={cmIMG} className="cm-logo" />
                </Col>
              </Row>
            </Col>
          </Row>

          <Spacer display="block" height={10} />

          <Row>
            <Col lg={8} md={24} sm={24}>
              <div className="caption-co">
                <Row className="text-large">DONATE.</Row>
                <Row className="text-large margin-adjust">SUPPORT.</Row>
                <Row className="text-large margin-adjust">VOLUNTEER.</Row>
                <Row>
                  <Col className="home-text-message">
                    The global coronavirus outbreak has forced all of us away
                    from our everyday lives. Although apart, we are all in this
                    fight together. The Government of Karnataka urges you to
                    step forward and help us provide food for relief and
                    healthcare for those in need.
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={16} md={24} sm={24}>
              <ImageCarousel caurosalData={caurosalData} imageWidth="95%" />
            </Col>
          </Row>
          <Row>
            <div className="home-actions">
              <Row>
                <Col lg={8} sm={24} xs={24} className="bottom-btn-containers">
                  <div className="goto-text" onClick={() => setShowModal(true)}>
                    <Button className="action-btn">
                      <img className="action-img" src={donateIco} />
                      DONATE FUNDS
                    </Button>
                  </div>
                </Col>

                <Col
                  lg={8}
                  sm={24}
                  xs={24}
                  className="bottom-btn-containers-alt"
                >
                  <Link to="/kind">
                    <div className="goto-text">
                      <Button className="action-btn">
                        <img className="action-img" src={supportIco} />
                        SUPPORT IN KIND
                      </Button>
                    </div>
                  </Link>
                </Col>

                <Col lg={8} sm={24} xs={24} className="bottom-btn-containers">
                  <div
                    className="goto-text"
                    onClick={() => setshowVolunteerModal(true)}
                  >
                    <Button className="action-btn">
                      <img className="action-img" src={volunteerIco} />
                      VOLUNTEER
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Col>

        <Col
          lg={6}
          sm={24}
          xs={24}
          md={6}
          className="gutter-row right-conteiner"
        >
          <Statistics covidStats={props.covidStats} />
          <Row style={{ padding: "5px" }}>
            <Col span="24">
              <TwitterWidget />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Footer noBackground={true} />
        </Col>

        <Affix
          offsetBottom={20}
          style={{ position: "fixed", right: 30, bottom: 30 }}
          className="req-help"
        >
          <Link to="/request">
            <Button type="primary" className="action-btn">
              <img className="action-img" src={helpIco} />
              Request for Help
            </Button>
          </Link>
        </Affix>
      </Row>
    </div>
  );
};

export default connector(HomePage);
