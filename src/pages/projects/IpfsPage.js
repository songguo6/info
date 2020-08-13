import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';

const infos = [{
    name: 'IPFS中国社区',
    url: 'http://www.ipfs.cn/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ipfs-logo-1024-ice-text.png/220px-Ipfs-logo-1024-ice-text.png',
}];

const IpfsPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('资讯', infos)} 
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default IpfsPage;