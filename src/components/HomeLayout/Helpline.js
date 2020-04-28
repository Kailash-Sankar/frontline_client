import React, { useState } from "react";
import { Modal, Row, Col, Button } from "antd";

import { WomanOutlined } from "@ant-design/icons";
import { Spacer } from "@components/Utils";
import { helplineLinks } from "@utils/constants";
import { useTranslation } from 'react-i18next';

const HelplineModal = ({ showModal, setShowModal }) => (
  <Modal
    title={<div>Women&apos;s Helpline</div>}
    visible={showModal}
    onOk={() => setShowModal(false)}
    onCancel={() => setShowModal(false)}
    footer={null}
  >
    <div style={{ textAlign: "left" }}>
      <div className="modal-txt">
        <p> Helpline numbers are available in the links below, </p>
        <span>
          <a href={helplineLinks.kannada} target="_new">
            <Button type="primary">ಕನ್ನಡ</Button>
          </a>
        </span>
        <Spacer width={10} />
        <span>
          <a href={helplineLinks.english} target="_new">
            <Button type="primary">English</Button>
          </a>
        </span>
      </div>
    </div>
  </Modal>
);

const Helpline = () => {
  const [showModal, setShowModal] = useState(false);
  const [t] = useTranslation();
  return (
    <Row>
      <HelplineModal showModal={showModal} setShowModal={setShowModal} />
      <Col span={24} className="bottom-btn-containers-alt">
        <div
          className="goto-text ftl"
          style={{ textAlign: "center" }}
          onClick={() => setShowModal(true)}
        >
          <Button className="orange-btn">
            <WomanOutlined /> {t("common.women_helpline")}
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Helpline;
