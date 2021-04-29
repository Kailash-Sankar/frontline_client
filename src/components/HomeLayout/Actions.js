import React, { useState } from "react";
import { Row, Col, Button } from "antd";

import donateIco from "@images/donate_ico.png";
import supportIco from "@images/support_ico.png";
import volunteerIco from "@images/volunteer_ico.png";

import PaymentModal from "./PaymentModal";
import VolunteerModal from "./VolunteerModal";

const Actions = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVolunteerModal, setshowVolunteerModal] = useState(false);

  return (
    <Row>
      <div className="home-actions">
        <PaymentModal showModal={showModal} setShowModal={setShowModal} />
        <VolunteerModal
          showModal={showVolunteerModal}
          setShowModal={setshowVolunteerModal}
        />

        <Row>
          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers">
            <div className="goto-text" onClick={() => setShowModal(true)}>
              <Button className="action-btn">
                <img className="action-img" src={donateIco} />
                DONATE
              </Button>
            </div>
          </Col>

          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers">
            <div
              className="goto-text"
              onClick={() => {
                window
                  .open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScYB1uaMOzNKWnONsboxTEjfW2jZHBu9SmbY7yWm4fKuln4JQ/viewform?usp=sf_link",
                    "_blank"
                  )
                  .focus();
              }}
            >
              <Button className="action-btn">
                <img className="action-img" src={volunteerIco} />
                VOLUNTEER
              </Button>
            </div>
          </Col>

          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers-alt">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://bit.ly/covidresourceskargov"
            >
              <div className="goto-text">
                <Button className="action-btn">
                  <img className="action-img" src={supportIco} />
                  COVID RESOURCE DIRECTORY
                </Button>
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default Actions;
