import React, { useEffect, useState } from "react";
import { Row, Col, Affix, Button } from "antd";
import { Spacer } from "@components/Utils";
import { Link, useHistory } from "react-router-dom";
import {
  ImageCarousel,
  PortalAppeals,
  Statistics,
  PaymentModal,
} from "@components/HomeLayout";
import { ArrowRightOutlined } from "@ant-design/icons";
import { connector } from "@store/homeContent";
import axios from "axios";

import background from "../../images/background.png";
import StateLogo from "../../images/state-logo.png";
import cmIMG from "../../images/cm-img.png";
import carousel1 from "../../images/carousel-1.png";
import carousel2 from "../../images/carousel-2.png";
import carousel3 from "../../images/carousel-3.jpg";
import carousel4 from "../../images/carousel-4.jpg";

const HomePage = (props) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    props.fetchAppeals({
      query: {},
      limit: 10,
    });

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

  const history = useHistory();
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

  const onClickAppeal = (appealData) => {
    props.setSelAppeals(appealData);
    history.push("/kind");
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
        <PaymentModal showModal={showModal} setShowModal={setShowModal} />

        <Row>
          <Col span={24} className="layout-header">
            <Row>
              <Col lg={3} md={3} sm={24} xs={24}>
                <img src={StateLogo} className="state-logo" />
              </Col>
              <Col lg={9} md={9} sm={24} xs={24}>
                <span className="header-text hashtag-1">
                  #karnatakafightscovid19
                </span>
              </Col>
              <Col lg={8} md={8} sm={24} xs={24} className="cm-image-container">
                <span className="header-text hashtag-2">#donatemadona</span>
              </Col>
              <Col lg={4} md={4} sm={24} xs={24} className="cm-image-container">
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
        <Row>
          <Col lg={20} sm={24} xs={24} md={20} className="home-text-message">
            <h2>
              The global coronavirus outbreak has forced all of us away from our
              everyday lives. Although apart, we are all in this fight together.
            </h2>
            <h3>
              The Government of Karnataka urges you to step forward and help us
              provide food for relief and healthcare for those in need.
            </h3>
          </Col>
        </Row>
      </Col>
      <Col lg={6} sm={24} xs={24} md={6} className="gutter-row right-conteiner">
        <Statistics covidStats={props.covidStats} />

        <Row style={{ padding: "5px" }}>
          <Col span="24">
            <PortalAppeals
              appealsData={props.appeals}
              appealClick={onClickAppeal}
            />
          </Col>
        </Row>
      </Col>
      <Spacer display="block" height={20} />
      <Col span={24}>
        <Row>
          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers">
            <div className="goto-text" onClick={() => setShowModal(true)}>
              DONATE FUNDS <ArrowRightOutlined />
            </div>
            <div>
              <div>
                UPI: &nbsp;&nbsp;<strong>cmrfcovid19@sbi</strong>
              </div>
              <div>
                Visit: &nbsp;
                <strong>
                  <a href="https://cmrf.karnataka.gov.in/" target="_new">
                    cmrf.karnataka.gov.in
                  </a>
                </strong>
              </div>
              <Spacer display="block" height={5} />
              <div className="goto-container-text">
                Contributions to the CM’s Relief Fund Covid-19 are exempted
                under section 80G(2) of Income Tax Act. Please use PAN as
                AAAGC1692P or GGGGG0000G while submitting returns.
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers2">
            <Link to="/kind">
              <div className="goto-text">
                SUPPORT IN KIND <ArrowRightOutlined />
              </div>
            </Link>
            <ul>
              <li>
                Medical equipment such as PPE, masks, ventilators testing kits,
                pulse oximeters, etc.
              </li>
              <li>
                Hospital equipment such as cots, mattresses, pillows bed sheets,
                blankets, and other support.
              </li>
              <li>Food for relief, for those in need.</li>
            </ul>
          </Col>
          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers">
            <a
              href="https://covid19.karnataka.gov.in/coronawarrior.html"
              target="_new"
            >
              <div className="goto-text">
                VOLUNTEER <ArrowRightOutlined />
              </div>
            </a>
            <ul>
              <li>
                Doctors can volunteer for telemedical services by giving missed
                call to 080-47192219
              </li>
              <li>
                Individuals and NGOs can volunteer for providing relief to the
                vulnerable sections of society.
              </li>
              <li>Inform us about anyone in need of relief. </li>
            </ul>
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
      <Affix
        offsetBottom={20}
        style={{ right: 30, position: "fixed", bottom: 30 }}
      >
        <Button type="primary">Request for Help</Button>
      </Affix>
    </Row>
  );
};

export default connector(HomePage);
