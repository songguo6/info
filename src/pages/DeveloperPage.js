import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard, createSideCard } from './common';
import { forums, apis, widgets, ides } from '../data/developer';

const DeveloperPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('技术社区', forums)}
      {createMainCard('API', apis)}
      {createMainCard('工具插件', widgets)}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('IDE & 代码编辑器', ides)}
      {createSideCard('', [])}
      {createSideCard('', [])}
    </Col>
  </Row>
)

export default DeveloperPage;