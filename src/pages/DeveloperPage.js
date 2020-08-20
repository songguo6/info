import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard, createSideCard } from './common';
import { infos, apis, sites, resources, tools, others} from '../data/developer';

const DeveloperPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('技术社区 & 博客', infos)}
      {createMainCard('API & 插件', apis)}
      {createMainCard('编程学习网站', sites)}
      {createMainCard('编程学习资源', resources)}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>     
      {createSideCard('通用工具', tools)}
      {createSideCard('其他网站', others)}
    </Col>
  </Row>
)

export default DeveloperPage;