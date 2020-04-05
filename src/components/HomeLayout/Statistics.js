import React from 'react';
import {Row, Col} from 'antd'

const Statistics = props => {

   const statsData = props.covidStats.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <Row className="covid-stat">
            <Col span="24"><h3 style={{margin:"0px"}}>{item.title}</h3></Col>
          </Row>
          <Row>
            <Col span="6">
              <div className="covid-stat-header">CONFIRMED</div>
              <div className="covid-stat-data">{item.confirmed}</div>
            </Col>
            <Col span="6">
              <div className="covid-stat-header">ACTIVE</div>
              <div className="covid-stat-data">{item.active}</div>
            </Col>
            <Col span="6">
              <div className="covid-stat-header">RECOVERED</div>
              <div className="covid-stat-data">{item.recovered}</div>
            </Col>
            <Col span="6">
              <div className="covid-stat-header">DECEASED</div>
              <div className="covid-stat-data">{item.deceased}</div>
            </Col>
          </Row>
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
      {statsData}
      </React.Fragment>
    );
}

export default Statistics;