import React from 'react';
import {Row, Col} from 'antd';

const Footer = props => {
    const style= {};
    if (!props.noBackground){
       const backgrondColor = props.backgrondColor ? props.backgrondColor : '#1d1e22';
       style.backgroundColor = backgrondColor;
    }
    return(
        <Row style={style} className="footer-container">
            <Col md={3} lg={3} sm={12} xs={12}
                style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                    <h3 style={{ marginBottom: "0px" }}>CONTACT DETAILS TO GET INVOLVED:</h3>
            </Col>
            <Col md={4} lg={4} sm={12} xs={12} className="footer-cell border-right">
                Phone <br />080-22284420
            </Col>
            <Col md={7} lg={7} sm={24} xs={24}
                className="footer-cell border-right"
                style={{ paddingLeft: "8px", }}>
                    <h3>Whatsapp</h3>
                    7760802872 / 8142941915
            </Col>
            <Col md={10} lg={10} sm={24} xs={24} style={{ paddingLeft: "8px" }}>
                <h3>Email</h3>
                <a href="mailto:kafightskorona@karnataka.gov" style={{ color: "#fff" }}>
                kafightskorona@karnataka.gov</a>{" "}/
                <a href="mailto:karnatakafightscorona@gmail.com" style={{ color: "#fff" }}>
                {" "}karnatakafightscorona@gmail.com
                </a>
          </Col>
        </Row>
    )
}

export default Footer;