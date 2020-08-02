import React from "react";
import { Link } from "react-router-dom";
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
      <div style={{ textAlign: "left" }}>
        <div className="modal-txt">
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
        </div>
        <p className="modal-txt">
          <span> Register as an </span>
          <span>
            <Link to="/ngosignup">
              <Button type="primary">NGO</Button>
            </Link>
          </span>
          <span>or</span>
          <span>
            <Link to="/volunteer">
              <Button type="primary">Individual</Button>
            </Link>
          </span>
        </p>
        <p style={{ marginBottom: "15px" }}></p>
      </div>
    </Modal>
  );
};

export default VolunteerModal;
