import React from "react";
import { Modal, Button } from "antd";

const VolunteerModal = (props) => {
  return (
    <Modal
      title={<div className="">Volunteer</div>}
      visible={props.showModal}
      onOk={() => props.setShowModal(false)}
      onCancel={() => props.setShowModal(false)}
      footer={null}
    >
      <p style={{ textAlign: "center", marginBottom: "15px" }}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdFsETYM_s3Rj-J69uiA-OHcAgK3HaZqnSjxUc6NCb5K8n6Mw/viewform?embedded=true"
          target="_new"
        >
          <Button type="primary">
            {"NGO"}
          </Button>
        </a>
      </p>
      <p className="payment-seperator-text">OR</p>
      <p style={{ textAlign: "center", marginBottom: "15px" }}>
        <a
          href="https://covid19.karnataka.gov.in/coronawarrior.html"
          target="_new"
        >
          <Button type="primary">
            {"Individual"}
          </Button>
        </a>
      </p>
    </Modal>
  );
};

export default VolunteerModal;
