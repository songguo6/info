import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';

const infos = [];

const IpfsPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('资讯', infos)} 
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default IpfsPage;