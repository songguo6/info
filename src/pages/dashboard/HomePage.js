import React from 'react';
import { Row, Col } from 'antd';
import { createSideCard, createMainCard } from '../common';
import { navigations, infos, exchanges, dxchanges, oxchanges, tools, browsers, evaluations, candies } from '../../data/home';

const HomePage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('导航站', navigations)}
      {createMainCard('资讯站', infos)}
      {
        createMainCard('交易所公告', exchanges, 
          <span>
            <a href="https://www.feixiaohao.com/exchange/notice" target="_blank" rel="noopener noreferrer">非小号&nbsp;|&nbsp;</a>
            <a href="https://www.mytoken.io/media/notice" target="_blank" rel="noopener noreferrer">MyToken</a>
          </span>)
      }
      {createMainCard('去中心化交易所', dxchanges)}
      {createMainCard('场外交易所', oxchanges)}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('工具', tools)}
      {createSideCard('多币种浏览器', browsers)}
      {createSideCard('项目测评', evaluations)}
      {createSideCard('空投糖果', candies)}
    </Col>
  </Row>
)

export default HomePage;