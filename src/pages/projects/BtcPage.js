import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { docs, records, apis, mine } from '../../data/projects/btc'

const BtcPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('文档', docs)}
      {createMainCard('区块记录', records)}
      {createMainCard('API', apis)}
      {createMainCard('挖矿', mine)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default BtcPage;