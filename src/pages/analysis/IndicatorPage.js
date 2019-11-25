import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';

import { indicators } from '../../data/indicator';

const columns = [{ 
  title: '指标名', 
  dataIndex: 'name', 
  key: 'name', 
  width: '100px',
  render: (text, record) => <a href={record.link} target='_blank' rel="noopener noreferrer">{text}</a>,
},{ 
  title: '说明', 
  dataIndex: 'info', 
  key: 'info', 
}];

class IndicatorPage extends Component{

  render(){
    return(
      <Row gutter={24}>
        <Col xl={17} lg={24} md={24} sm={24} xs={24}>
          <Table columns={columns} dataSource={indicators} />
        </Col>
        
        <Col xl={7} lg={24} md={24} sm={24} xs={24}>

        </Col>
      </Row>
    )
  }
}

export default IndicatorPage;