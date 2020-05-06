import React, { useState } from "react";
import { Modal, Row, Col, Button, Descriptions } from "antd";
import { CarOutlined } from "@ant-design/icons";
import { travelLinks } from "@utils/constants";

const { Item } = Descriptions;

const TravelAssistanceModal = ({ showModal, setShowModal }) => (
  <Modal
    title={<div>Travel Assistance</div>}
    visible={showModal}
    onOk={() => setShowModal(false)}
    onCancel={() => setShowModal(false)}
    footer={null}
  >
    <div style={{ textAlign: "left" }}>
      <div className="modal-txt">
        <Descriptions
          size="small"
          bordered
          column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
        >
          {travelLinks.map((travel, index) => (
            <Item key={index}>
              <a href={travel.link} target="_blank" rel="noopener noreferrer">
                <Button type="link">{travel.label} </Button>
              </a>
            </Item>
          ))}
        </Descriptions>
      </div>
    </div>
  </Modal>
);

const TravelAssistance = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Row>
      <TravelAssistanceModal
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <Col span={24} className="bottom-btn-containers-alt">
        <div
          className="goto-text ftl"
          style={{ textAlign: "center" }}
          onClick={() => setShowModal(true)}
        >
          <Button className="orange-btn">
            <CarOutlined />
            Travel Assistance
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default TravelAssistance;
