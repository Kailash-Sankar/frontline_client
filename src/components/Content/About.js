import React from "react";
import Wrapper from "./Wrapper";

import spykkLogo from "@images/spykk_logo.png";
import sapLogo from "@images/sap_logo.png";

import { Row, Col } from "antd";

//import StateLogo from "@images/state-logo.png";

const About = () => (
  <Wrapper>
    <div style={{ padding: "0 2%" }}>
      <Row>
        <Col lg={24} md={24} sm={24}>
          <center>
            <h1>The Vision</h1>
          </center>
          <p>
            Whether in the midst of a pandemic, a natural disaster, or a law and
            order situation, a drought or economic crisis, it is a real and
            meaningful contribution to support those in hardship.
          </p>
          <p>
            How can we build a platform that can get response and relief to
            anyone in their hour of need &ndash; respectfully, with dignity, and
            in the shortest possible time?
          </p>
          <p>
            At the intersection of welfare, policy and technology, this is the
            question with which this project was conceived.
          </p>
          <p>
            This project brought the state government together with a startup, a
            research institute, an IT multinational.
          </p>
          <p>
            We also gained from conversations with a policy think tank, several
            non-profits, and groups working with migrant workers and the
            unorganised sector.
          </p>
          <p>
            What began as a quick response activity soon grew into this relief
            management platform: Sankalpa, meaning resolve.
          </p>
          <p>
            Financial support, in-kind donations, and on-ground work by covil
            society organisations, non-governmental organisations, private
            sector and volunteer groups have all been channelled and coordinated
            through this platform.
          </p>
          <p>
            Sankalpa is a tribute to the tremendous creative energies and deep
            civic engagement of Bengaluru and Karnataka.
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={24} sm={24} className="about-box">
          <h2>
            <strong>The Development Team</strong>
          </h2>
          <p>Organisations who have developed Sankalpa:</p>
          <div>
            <img
              src={spykkLogo}
              style={{ width: 176, height: 92 }}
              alt="Spykk Labs"
            />
            <img
              src={sapLogo}
              style={{ width: 92, height: 48 }}
              alt="SAP Labs"
            />
          </div>
          <p>SPYKK Labs (Swaroop, Kannan, Kailash, Kishore and Rajeesh)</p>
          <p>SAP Labs (Harish, Pavithra, Lakshmisha and Team)</p>
          <p>IIIT-B (Vivek) &ndash; Hosting Partner</p>
          <p>We acknowledge the contributions of:</p>
          <p>Reap Benefit (Kuldeep, Gautam)</p>
          <p>Fields of View (Bharath, Yashwin)</p>
          <p>
            We acknowledge fruitful conversations with Whitefield Rising and
            LibTech
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={24} sm={24} className="about-box">
          <h2>
            <strong>The Committee</strong>
          </h2>
          <p>
            Committee to Coordinate with CSOs/NGOs, Private Sector and
            International Organisations for Covid-19 Response-Related Activities
          </p>
          <p>Mahendra Jain, ACS Energy &ndash; Chair</p>
          <p>
            Uma Mahadevan, Principal Secretary, Panchayat Raj &ndash; Member
          </p>
          <p>
            Gunjan Krishna, Commissioner, Industrial Development &ndash; Member
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={24} sm={24} className="about-box">
          <h2>
            <strong>The Working Group</strong>
          </h2>
          <p>
            Priyanka Mary Francis, Commissioner, Panchayat Raj and Additional
            Chief Electoral Officer
          </p>
          <p>Anirudh Sravan, Commissioner, Rural Development&nbsp;</p>
          <p>Shilpa Nag, Director Egovernance &amp; Director SIRD, RDPR Dept</p>
          <p>Mamatha, MD NRLM</p>
          <p>Shivashankar, Director, Panchayat Raj, RDPR</p>
          <p>Ashrafulhasan, Director, Panchayat Raj, RDPR</p>
          <p>Sahana Hadimani, Bangalore DC Office</p>
          <p>Venugopalan, Consultant, Decentralisation Cell, RDPR</p>
          <h3>UNICEF and UNDP team members:</h3>
          <p>Manohar &amp; Peer Mohammed</p>
          <p>Manasa</p>
          <h3>Control Room Team:</h3>
          <p>
            Siddhant, Shubham, Lynda, Leena, Tarun, Tejas, Goutam, Aamir,
            Deeksha, Vignesh, Pannagashree, Arun
          </p>
        </Col>
      </Row>
    </div>
  </Wrapper>
);

export default About;
