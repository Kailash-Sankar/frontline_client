import React, { useState } from "react";
import { Modal, Row, Col, Button } from "antd";

import { WomanOutlined } from "@ant-design/icons";
import { Spacer } from "@components/Utils";

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
          <a
            href="https://drive.google.com/open?id=1vBTp1pG92sjgv6U6LIHbCu7rC3R-b648"
            target="_new"
          >
            <Button type="primary">ಕನ್ನಡ</Button>
          </a>
        </span>
        <Spacer width={10} />
        <span>
          <a
            href="https://drive.google.com/open?id=1Mv0CuqmqV5jBv2sX2utuqXfPHIZ01_V_"
            target="_new"
          >
            <Button type="primary">English</Button>
          </a>
        </span>
      </div>
    </div>
  </Modal>
);

const Helpline = () => {
  const [showModal, setShowModal] = useState(false);

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
            <WomanOutlined /> Women&apos;s Helpline
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Helpline;
