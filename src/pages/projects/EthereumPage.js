import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { infos, tools } from '../../data/projects/ethereum'

const EthereumPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('资讯 & 社区', infos)}
      {createMainCard('开发工具', tools)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default EthereumPage;