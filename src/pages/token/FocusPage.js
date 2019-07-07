import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';

class FocusPage extends Component{
  render(){
    return(
      <Row gutter={24}>
        <Col xl={18} lg={24} md={24} sm={24} xs={24}>
          {createMainCard('关注币种', [])} 
        </Col>
    
        <Col xl={6} lg={24} md={24} sm={24} xs={24}>
    
        </Col>
      </Row>
    )
  }
}

export default FocusPage;