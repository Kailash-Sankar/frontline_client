import React from 'react';
import {Row, Col} from 'antd'

const Statistics = props => {

   const statsData = props.covidStats.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <Row className="covid-stat">
            <Col span="24"><h3 style={{margin:"0px"}}>{item.title|| ''}</h3></Col>
          </Row>
          <Row>
            <Col span="6">
              <div className="covid-stat-header">CONFIRMED</div>
              <div className="covid-stat-data">{item.confirmed || 0}</div>
            </Col>
            <Col span="6">
              <div className="covid-stat-header">ACTIVE</div>
              <div className="covid-stat-data">{item.active || 0}</div>
            </Col>
            <Col span="6">
              <div className="covid-stat-header">RECOVERED</div>
              <div className="covid-stat-data">{item.recovered || 0}</div>
            </Col>
            <Col span="6">
              <div className="covid-stat-header">DECEASED</div>
              <div className="covid-stat-data">{item.deaths || 0}</div>
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