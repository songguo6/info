import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';

import { datas } from '../../data/dashboard/term';

const columns = [{ 
  title: '术语', 
  dataIndex: 'term', 
  key: 'term', 
  render: (text) => <span style={{fontWeight: 'bold'}}>{text}</span>
},{ 
  title: '英文', 
  dataIndex: 'english', 
  key: 'english', 
},{ 
  title: '中文', 
  dataIndex: 'chinese', 
  key: 'chinese', 
}];

class TermPage extends Component {

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
          <img width='100%' src='https://i.loli.net/2019/07/07/5d21fbf162be851763.jpg' alt='' />
        </Col>
      </Row>
    )
  }
}

export default TermPage;