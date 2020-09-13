import React from 'react';
import { Row, Col } from 'antd';
import { createCard } from '../common';
import { info, substrate, tools, envs } from '../../data/projects/polkadot'

const PolkadotPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createCard('波卡资讯&社区', info)}
      {createCard('Substrate区块链开发框架', substrate)}
      {createCard('工具', tools)}
      {createCard('波卡生态', envs)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default PolkadotPage;