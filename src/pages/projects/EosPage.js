import React from 'react';
import { Row, Col } from 'antd';
import { createCard, createCard2 } from '../common';
import { creators, tools, developers, eosdocs, eostools, githubs, dapps, blogs } from '../../data/projects/eos';

const EosPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createCard('EOS账号创建', creators)}
      {createCard('EOS工具', tools)}
      {createCard('EOS开发者', developers)}
      {createCard('EOS开发文档', eosdocs)}
      {createCard('EOS开发工具', eostools)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
      {createCard2('Github', githubs)}
      {createCard2('EOS DAPP', dapps)}
      {createCard2('EOS博客', blogs)}
    </Col>
  </Row>
)

export default EosPage;