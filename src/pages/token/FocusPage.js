import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';

import { createMainCard } from '../common';
import { fetchAll } from '../../eosio/api/fetch';

class FocusPage extends Component{

  state = {data : [], loading: true}

  async componentDidMount(){
    const res = await fetchAll('tokentable');
    let datas = [...res];
    datas.forEach(item => item.key = item.id);
    this.setState({data: datas, loading: false});
  }

  render(){
    return(
      <Row gutter={24}>
        <Col xl={17} lg={24} md={24} sm={24} xs={24}>
          <Spin tip='加载中...' spinning={this.state.loading}>
            {createMainCard('关注币种', this.state.data)} 
          </Spin>
        </Col>
        
        <Col xl={7} lg={24} md={24} sm={24} xs={24}>
      
        </Col>
      </Row>
    )
  }
}

export default FocusPage;