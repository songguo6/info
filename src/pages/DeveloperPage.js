import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard, createSideCard } from './common';
import { 
  forums, eosdocs, eosblogs, eostools, ipfs, polkadot, apis, ides, githubs, 
  sites, resources, tools, 
} from '../data/developer';

const DeveloperPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('技术社区', forums)}
      {createMainCard('EOS开发文档', eosdocs)}
      {createMainCard('EOS技术博客', eosblogs)}
      {createMainCard('EOS开发工具', eostools)}
      {createMainCard('IPFS开发文档 & 技术博客 & 开发工具', ipfs)}
      {createMainCard('波卡开发文档 & 技术博客 & 开发工具', polkadot)}
      {createMainCard('API & 插件', apis)}
      {createMainCard('IDE & 代码编辑器', ides)}
      {createMainCard('Github', githubs)}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('通用学习网站', sites)}
      {createSideCard('通用学习资源', resources)}
      {createSideCard('通用工具', tools)}
    </Col>
  </Row>
)

export default DeveloperPage;