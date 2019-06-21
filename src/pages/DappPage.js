import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard, createSideCard } from './common';

const DappPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('DAPP', [])}
      {createMainCard('', [])}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('DAPP导航', [])}
      {createSideCard('工具', [])}
      {createSideCard('', [])}
    </Col>
  </Row>
)

export default DappPage;