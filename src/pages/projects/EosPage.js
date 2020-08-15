import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard, createSideCard } from '../common';
import { creators, tools, developers, eosdocs, eostools, githubs, dapps } from '../../data/projects/eos';

const EosPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('EOS账号创建', creators)}
      {createMainCard('EOS工具', tools)}
      {createMainCard('EOS开发者', developers)}
      {createMainCard('EOS开发文档', eosdocs)}
      {createMainCard('EOS开发工具', eostools)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('Github', githubs, '50%')}
      {createSideCard('EOS DAPP', dapps, '50%')}
    </Col>
  </Row>
)

export default EosPage;