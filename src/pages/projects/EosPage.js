import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { creators, tools, developers } from '../../data/projects/eos';

const EosPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('账号创建', creators)}
      {createMainCard('EOS工具', tools)}
      {createMainCard('EOS开发者', developers)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>

    </Col>
  </Row>
)

export default EosPage;