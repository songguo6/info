import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';

import { datas } from '../../data/projects/focus';

const columns = [{ 
  title: '币种', 
  dataIndex: 'symbol', 
  key: 'symbol', 
  render: (text) => <span style={{fontWeight: 'bold'}}>{text}</span>
},{
  title: '类型',
  dataIndex: 'type', 
  key: 'type', 
},{
  title: '总发行量', 
  dataIndex: 'total_supply', 
  key: 'total_supply', 
},{
  title: '公募价（$）',
  dataIndex: 'price_0',
  key: 'price_0',
},{ 
  title: '现价', 
  render: (record) => <a href={record.link} target='_blank' rel="noopener noreferrer">查看</a>
},{
  title: '估值价格（$）*',
  dataIndex: 'price_1',
  key: 'price_1',
}];

class FocusPage extends Component {

  state = {data : []}

  async componentDidMount(){
    this.setState({data: datas});
  }

  render(){
    return (
      <Row gutter={24}>
        <Col xl={19} lg={24} md={24} sm={24} xs={24}>
          <Table columns={columns} dataSource={this.state.data} />
        </Col>
        <Col xl={5} lg={24} md={24} sm={24} xs={24}>
          
        </Col>
      </Row>
    )
  }
}

export default FocusPage;