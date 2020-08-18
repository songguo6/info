import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { tools } from '../../data/projects/btc'

const BtcPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('工具', tools)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default BtcPage;