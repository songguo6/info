import React from 'react';
import { Row, Col } from 'antd';
import { createCard, createCard3 } from './common';
import { infos, apis, sites, resources, tools, others} from '../data/developer';

const DeveloperPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createCard('技术社区 & 博客', infos)}
      {createCard('API & 插件', apis)}
      {createCard('编程学习网站', sites)}
      {createCard('编程学习资源', resources)}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>     
      {createCard3('通用工具', tools)}
      {createCard3('其他网站', others)}
    </Col>
  </Row>
)

export default DeveloperPage;