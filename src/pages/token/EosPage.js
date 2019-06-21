import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard, createSideCard } from '../common';

const EosPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('EOS', [])}
      {createMainCard('', [])}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('区块浏览器', [])}
      {createSideCard('工具', [])}
      {createSideCard('', [])}
    </Col>
  </Row>
)

export default EosPage;