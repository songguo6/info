import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';
import moment from 'moment';

import { tokens } from '../../data/token';

const columns = [{ 
  title: '项目名', 
  dataIndex: 'name', 
  key: 'name', 
  render: (text, record) => <a href={record.link} target='_blank' rel="noopener noreferrer">{text}</a>,
},{ 
  title: '代币符号', 
  dataIndex: 'symbol', 
  key: 'symbol', 
},{ 
  title: '众筹单价($)', 
  dataIndex: 'price', 
  key: 'price', 
},{
  title: '总供应量',
  dataIndex: 'supply',
  key: 'supply',
},{ 
  title: '众筹时间', 
  dataIndex: 'time', 
  key: 'time', 
},{
  title: 'Github',
  dataIndex: 'github',
  key: 'github',
  render: text => <a href={'https://' + text} target='_blank' rel="noopener noreferrer">{text}</a>,
}];

class FocusPage extends Component{

  render(){
    return(
      <Row gutter={24}>
        <Col xl={17} lg={24} md={24} sm={24} xs={24}>
          <Table columns={columns} dataSource={tokens} />
        </Col>
        
        <Col xl={7} lg={24} md={24} sm={24} xs={24}>

        </Col>
      </Row>
    )
  }
}

export default FocusPage;