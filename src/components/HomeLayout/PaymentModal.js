import React from "react";
import { Modal, Row, Col, List } from "antd";

const PaymentModal = (props) => {
  return (
    <Modal
      title={<div className="">Donate Funds</div>}
      visible={props.showModal}
      onOk={() => props.setShowModal(false)}
      onCancel={() => props.setShowModal(false)}
      footer={null}
    >
      <Row>
        <Col span={24}>
          <h3 className="payment-header">
            KARNATAKA STATE DISASTER MANAGEMENT AUTHORITY
          </h3>
          <div
            style={{ fontWeight: "600", fontSize: "12px", textAlign: "center" }}
          >
            *Eligible to receive CSR funds towards disaster management for
            COVID-19 management and containment.
          </div>
          <List>
            <List.Item>
              <span className="payment-field-label">ACCOUNT NO:</span>
              <span className="payment-field-value">38690610155</span>
            </List.Item>
            <List.Item>
              <span className="payment-field-label">IFSC CODE:</span>
              <span className="payment-field-value">SBIN0040277</span>
            </List.Item>
            <List.Item>
              <span className="payment-field-label">
                SBI, VIDHANA SOUDHA BRANCH, BENGALURU
              </span>
            </List.Item>
          </List>
        </Col>
      </Row>
    </Modal>
  );
};

export default PaymentModal;
