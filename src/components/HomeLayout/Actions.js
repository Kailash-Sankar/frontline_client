import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

import donateIco from "@images/donate_ico.png";
import supportIco from "@images/support_ico.png";
import volunteerIco from "@images/volunteer_ico.png";

import PaymentModal from "./PaymentModal";
import VolunteerModal from "./VolunteerModal";

import { useTranslation } from 'react-i18next';

const Actions = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVolunteerModal, setshowVolunteerModal] = useState(false);
  const [t] = useTranslation();
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
                {t("common.donate_funds")}

              </Button>
            </div>
          </Col>

          <Col lg={8} sm={24} xs={24} className="bottom-btn-containers-alt">
            <Link to="/kind">
              <div className="goto-text">
                <Button className="action-btn">
                  <img className="action-img" src={supportIco} />

                  {t("common.support_in_kind")}

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
                {t("common.volunteer")}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default Actions;
