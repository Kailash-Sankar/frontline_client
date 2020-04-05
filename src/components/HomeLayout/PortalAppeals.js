import React from 'react';
import { List, Badge } from 'antd';

const PortalAppeals = props => {

  const RenderItem = item => {
    return (
      <List.Item 
        onClick={() => props.appealClick(item)}
        style={{cursor:'pointer'}}><Badge status="processing"/>{item}</List.Item>
    )
  }

  return (
    <div>
      <h2 className="appeals-header">Appeals</h2>
      <div style={{
            textAlign:'left', 
            maxHeight: '350px', 
            overflowY:'auto',
            fontSize: '12px'}}
            className="appeals-data">
        <List
          size="small"
          dataSource={props.appealsData}
          renderItem={item => RenderItem(item)}
        />
      </div>
    </div>
  )
};

export default PortalAppeals;