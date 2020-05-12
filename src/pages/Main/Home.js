import React, { useEffect } from "react";
import { Row, Col, Affix, Button } from "antd";
import { Spacer } from "@components/Utils";
import Footer from "@components/Footer";
import { Link } from "react-router-dom";
import {
  Statistics,
  TwitterWidget,
  Content,
  Header,
  Actions,
  Helpline,
  // TravelAssistance,
} from "@components/HomeLayout";

import { connector } from "@store/homeContent";
import axios from "axios";

import background from "@images/background.png";

import helpIco from "@images/help_ico.png";

const HomePage = (props) => {
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

  return (
    <div
      style={{
        backgroundImage: "url(" + background + ")",
      }}
      className="layout-conteiner"
    >
      <Row style={{ flexGrow: 1 }}>
        <Col lg={18} xs={24} sm={24} md={18} className="gutter-row">
          <Header />
          <Spacer display="block" height={10} />
          <Content />
          <Spacer display="block" height={5} />
          <Actions />
        </Col>

        <Col
          lg={6}
          sm={24}
          xs={24}
          md={6}
          className="gutter-row right-conteiner"
        >
          <Statistics covidStats={props.covidStats} />
          <Helpline />
          {/* <TravelAssistance /> */}
          <Row style={{ padding: "5px" }}>
            <Col span="24">
              <TwitterWidget />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Spacer display="block" height={20} />
          <Footer noBackground={true} />
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
        </Col>
      </Row>
    </div>
  );
};

export default connector(HomePage);
