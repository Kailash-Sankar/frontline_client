import React from 'react';
import { Modal, Button, Row, Col, List } from 'antd';

const PaymentModal = props => {
  return (
    <Modal
      title={
          <div className="">Donate Funds</div>
      }
      visible={props.showModal}
      onOk={() => props.setShowModal(false)}
      onCancel={() => props.setShowModal(false)}
      footer={[
        <Button key="close" type="secondary" onClick={() => props.setShowModal(false)}>Close</Button>,
      ]}
    >
        <h3 className="payment-header">{"Click the button below to donate to the Chief Minister's Relief Fund"}</h3>
        <p style={{textAlign:"center", marginBottom: "15px"}}>
            <a href="https://cmrf.karnataka.gov.in/English/index.html" target="_new">
                <Button type="primary">{"Donate to the Chief Minister's Relief Fund"}</Button>
            </a>
        </p>
        <p className="payment-seperator-text">OR</p>
         <Row>
             <Col span={24}>
                 <List>
                    <List.Item>
                        <h3 className="payment-header">KARNATAKA STATE DISASTER MANAGEMENT AUTHORITY</h3>
                    </List.Item>
                    <List.Item>
                        <span className="payment-field-label">ACCOUNT NO:</span>  
                        <span className="payment-field-value">XXXXXXXXXX</span>
                    </List.Item>
                    <List.Item>
                        <span className="payment-field-label">IFSC CODE:</span>  
                        <span className="payment-field-value">XXXXXXXXXX</span>
                    </List.Item>
                    <List.Item><span className="payment-field-label">SBI, VIDHANA SOUDHA BRANCH, BENGALURU</span></List.Item>
                 </List>
             </Col>
             
         </Row>
    </Modal>
  )
}

export default PaymentModal;