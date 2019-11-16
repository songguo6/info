import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';

import { airgrabs } from '../../data/token';

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
  title: '合约', 
  dataIndex: 'contract', 
  key: 'contract', 
  render: (text) => <a href={'https://bloks.io/account/' + text + '?loadContract=true&tab=Actions'} target='_blank' rel="noopener noreferrer">{text}</a>,
},{
  title: 'Action',
  dataIndex: 'action',
  key: 'action',
},{
  title: 'Github',
  dataIndex: 'github',
  key: 'github',
  render: (text) => <a href={'https://github.com/' + text} target='_blank' rel="noopener noreferrer">{text}</a>,
},{
  title: '交易所',
  dataIndex: 'exchange',
  key: 'exchange',
},{
  title: '备注',
  dataIndex: 'tip',
  key: 'tip',
}];

class GrabPage extends Component{

  render(){
    return(
      <Row gutter={24}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Table columns={columns} dataSource={airgrabs} />
        </Col>
      </Row>
    )
  }
}

export default GrabPage;