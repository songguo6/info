import React from 'react';
import { Row, Col } from 'antd';
import { createCard } from '../common';
import { docs } from '../../data/projects/polkadot'

const PolkadotPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createCard('波卡开发文档', docs)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default PolkadotPage;