import React from 'react';
import { Row, Col } from 'antd';
import { createCard, createCard2 } from '../common';
import { infos, docs, developers, storage } from '../../data/projects/ipfs'

const IpfsPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createCard('IPFS资讯 & 社区', infos)}
      {createCard('IPFS开发文档', docs)}
      {createCard('IPFS开发工具', developers)} 
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
      {createCard2('去中心化存储', storage)}
    </Col>
  </Row>
)

export default IpfsPage;