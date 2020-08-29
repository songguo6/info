import React from 'react';
import { Row, Col } from 'antd';
import { createCard } from '../common';
import { bsn, policy, company, newbase, infos } from '../../data/industries/bsn';

const BSNPage = () => (
  <Row gutter={24}>
    <Col xl={18} lg={24} md={24} sm={24} xs={24}>
      {createCard('区块链服务网络BSN官网', bsn)}
      {createCard('区块链政策', policy)}
      {createCard('区块链解决方案提供商', company)}
    </Col>

    <Col xl={6} lg={24} md={24} sm={24} xs={24}>     
      {createCard('资料库', infos, '50%')}
      {createCard('新基建', newbase, '100%')}
    </Col>
  </Row>
)

export default BSNPage;