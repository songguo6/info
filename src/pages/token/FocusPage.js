import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { createMainCard } from '../common';
import { fetchAll } from '../../eosio/api/fetch';

class FocusPage extends Component{

  state = {data : []}

  async componentDidMount(){
    const res = await fetchAll('tokentable');
    let datas = [...res];
    datas.forEach(item => {
      item.key = item.id;
    });
    this.setState({data: datas});
  }

  render(){
    return(
      <Row gutter={24}>
        <Col xl={18} lg={24} md={24} sm={24} xs={24}>
          {createMainCard('关注币种', this.state.data)} 
        </Col>
    
        <Col xl={6} lg={24} md={24} sm={24} xs={24}>
    
        </Col>
      </Row>
    )
  }
}

export default FocusPage;