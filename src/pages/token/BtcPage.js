import React from 'react';
import { Row, Col } from 'antd';
import { browsers, tools } from '../../data/btc';
import { createMainCard, createSideCard } from '../common';

const BtcPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('BTC', [])}
      {createMainCard('', [])}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('区块浏览器', browsers)}
      {createSideCard('工具', tools)}
      {createSideCard('', [])}
    </Col>
  </Row>
)

export default BtcPage;