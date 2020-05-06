import React, { useState } from "react";
import { Modal, Row, Col, Button } from "antd";
import { CarOutlined } from "@ant-design/icons";
import { travelLinks } from "@utils/constants";
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
        {travelLinks.map((travel, index) => (
          <p key={index}><a href={travel.link} target="_blank"  rel="noopener noreferrer">
            <Button type="link">{travel.label} </Button>
          </a></p>
        ))}
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
            <CarOutlined />Travel Assistance
        </Button>
        </div>
      </Col>
    </Row >
  );
};

export default Helpline;
