import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard, createSideCard } from './common';
import { navigations, dapps } from '../data/dapp';

const DappPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('DAPP导航', navigations)}
      {createMainCard('DAPP关注', dapps)}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('', [])}
      {createSideCard('', [])}
      {createSideCard('', [])}
    </Col>
  </Row>
)

export default DappPage;