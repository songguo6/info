import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard, createSideCard } from '../common';
import { bsn, policy, company, newbase } from '../../data/industries/bsn';

const BSNPage = () => (
  <Row gutter={24}>
    <Col xl={18} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('区块链服务网络BSN官网', bsn)}
      {createMainCard('区块链政策', policy)}
      {createMainCard('区块链解决方案提供商', company)}
    </Col>

    <Col xl={6} lg={24} md={24} sm={24} xs={24}>     
      {createSideCard('新基建', newbase, '100%')}
    </Col>
  </Row>
)

export default BSNPage;