import React from 'react';
import { Row, Col } from 'antd';
import { createCard } from '../common';
import { docs, infos, developer } from '../../data/projects/ethereum'

const EthereumPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createCard('文档', docs)}
      {createCard('资讯 & 社区', infos)}
      {createCard('开发者', developer)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default EthereumPage;