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
      <div style={{ textAlign: "left" }}>
        <p className="modal-txt">
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
        </p>
        <p className="modal-txt">
          <span> Register as an </span>
          <span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdFsETYM_s3Rj-J69uiA-OHcAgK3HaZqnSjxUc6NCb5K8n6Mw/viewform?embedded=true"
              target="_new"
            >
              <Button type="primary">NGO</Button>
            </a>
          </span>
          <span>or</span>
          <span>
            <a
              href="https://covid19.karnataka.gov.in/coronawarrior.html"
              target="_new"
            >
              <Button type="primary">{"Individual"}</Button>
            </a>
          </span>
        </p>
        <p style={{ marginBottom: "15px" }}></p>
      </div>
    </Modal>
  );
};

export default VolunteerModal;
