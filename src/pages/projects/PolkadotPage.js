import React from 'react';
import { Row, Col } from 'antd';
import { createCard2, createCard4 } from '../common';
import { info, substrate, blogs, docs, tools, envs, wallets } from '../../data/projects/polkadot'

const PolkadotPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createCard4('波卡资讯&社区', info)}
      {createCard4('Substrate区块链开发框架', substrate)}
      {createCard4('Substrate技术博客 & 社区', blogs)}
      {createCard4('Polkadot开发文档', docs)}
      {createCard4('工具', tools)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
      {createCard2('波卡生态', envs)}
      {createCard2('钱包', wallets)}
    </Col>
  </Row>
)

export default PolkadotPage;