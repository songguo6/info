import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { infos, docs, developers } from '../../data/projects/ipfs'

const IpfsPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('IPFS资讯 & 社区', infos)}
      {createMainCard('IPFS开发文档', docs)}
      {createMainCard('IPFS开发工具', developers)} 
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default IpfsPage;