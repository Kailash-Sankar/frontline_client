import React, { useState } from "react";
import { Modal, Row, Col, Button } from "antd";

// import { WomanOutlined } from "@ant-design/icons";
// import { Spacer } from "@components/Utils";
// import { helplineLinks } from "@utils/constants";

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
        <p><a href="https://mapit.gov.in/covid-19" target="_new">
          <Button type="link">Madhya Pradesh</Button>
        </a></p>
        <p><a href="https://www.digitalgujarat.gov.in/loginapp/CitizenLogin.aspx" target="_new">
          <Button type="link">Gujarat </Button>
        </a></p>
        <p><a href="https://covidhelp.punjab.gov.in" target="_new">
          <Button type="link"> Punjab </Button>
        </a></p>
        <p><a href="https://covid19.mhpolice.in" target="_new">
          <Button type="link">Maharashtra </Button>
        </a></p>
        <p><a href="https://emitraapp.rajasthan.gov.in/emitraApps/covid19MigrantRegistrationService" target="_new">
          <Button type="link">Rajasthan  </Button>
        </a></p>
        <p><a href="http://covidepass.hp.gov.in/" target="_new">
          <Button type="link">Himachal Pradesh  </Button>
        </a></p>
        <p><a href="http://tnepass.tnega.gov.in" target="_new">
          <Button type="link">Tamil Nadu</Button>
        </a></p>
        <p><a href="https://edisha.gov.in/eForms/MigrantService" target="_new">
          <Button type="link">Haryana </Button>
        </a></p>
        <p><a href="https://sevasindhu.karnataka.gov.in/Sevasindhu/English" target="_new">
          <Button type="link">Karnataka </Button>
        </a></p>
        <p><a href="http://dsclservices.org.in/uttarakhand-migrant-registration.php" target="_new">
          <Button type="link">Uttarakhand </Button>
        </a></p>
        <p><a href="https://covid19regd.odisha.gov.in/" target="_new">
          <Button type="link">Odisha </Button>
        </a></p>
        <p><a href="goaonline.gov.in " target="_new">
          <Button type="link">Goa </Button>
        </a></p>
        <p><a href="https://covid19jagratha.kerala.nic.in/" target="_new">
          <Button type="link">Kerala </Button>
        </a></p>
        <p><a href="serviceonline.bihar.gov.in" target="_new">
          <Button type="link">Bihar </Button>
        </a></p>
        <p><a href=" jharkhandpravasi.in" target="_new">
          <Button type="link">Jharkhand</Button>
        </a></p>
        <p><a href="http://cglabour.nic.in/covid19MigrantRegistrationService.aspx" target="_new">
          <Button type="link"> Chhattisgarh</Button>
        </a></p>
        <p><a href="http://spandana1.ap.gov.in/Registration/onlineRegistration" target="_new">
          <Button type="link">Andhra Pradesh </Button>
        </a></p>
        <p><a href="Jansunwai.up.nic.in" target="_new">
          <Button type="link">Uttar Pradesh </Button>
        </a></p>


        {/* <p> Helpline numbers are available in the links below, </p>
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
        </span> */}
      </div>
    </div >
  </Modal >
);

// const HelplineModal = ({ showModal, setShowModal }) => (
//   <Modal
//     title={<div>Women&apos;s Helpline</div>}
//     visible={showModal}
//     onOk={() => setShowModal(false)}
//     onCancel={() => setShowModal(false)}
//     footer={null}
//   >
//     <div style={{ textAlign: "left" }}>
//       <div className="modal-txt">
//         <p> Helpline numbers are available in the links below, </p>
//         <span>
//           <a href={helplineLinks.kannada} target="_new">
//             <Button type="primary">ಕನ್ನಡ</Button>
//           </a>
//         </span>
//         <Spacer width={10} />
//         <span>
//           <a href={helplineLinks.english} target="_new">
//             <Button type="primary">English</Button>
//           </a>
//         </span>
//       </div>
//     </div >
//   </Modal >
// );

const Helpline = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    // <Row>
    //   <HelplineModal showModal={showModal} setShowModal={setShowModal} />

    //   <Col span={24} className="bottom-btn-containers-alt">
    //     <div
    //       className="goto-text ftl"
    //       style={{ textAlign: "center" }}
    //       onClick={() => setShowModal(true)}
    //     >
    //       <Button className="orange-btn">
    //         <WomanOutlined /> Women&apos;s Helpline
    //       </Button>
    //     </div>
    //   </Col>
    // </Row>
    // <Row>
    <Row>
      <TravelAssistanceModal showModal={showModal} setShowModal={setShowModal} />

      <Col span={24} className="bottom-btn-containers-alt">
        <div
          className="goto-text ftl"
          style={{ textAlign: "center" }}
          onClick={() => setShowModal(true)}
        >
          <Button className="orange-btn">
            Travel Assistance
        </Button>
        </div>
      </Col>
    </Row >
  );
};

export default Helpline;
