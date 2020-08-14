import React from 'react';
import { Row, Col } from 'antd';
import { createSideCard, createMainCard } from '../common';
import { 
  navigations, indexs, infos, evaluations, 
  exchanges, tools, knowledge, browsers, wallets
} from '../../data/dashboard/home';

const HomePage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('综合导航', navigations)}
      {createMainCard('综合指标', indexs)}
      {createMainCard('资讯站 & 社区', infos)}
      {createMainCard('项目测评', evaluations)}
      {
        createMainCard('交易所', exchanges, 
          <span>
            <a href="https://www.feixiaohao.com/exchange/notice" target="_blank" rel="noopener noreferrer">非小号&nbsp;|&nbsp;</a>
            <a href="https://block.cc/notice" target="_blank" rel="noopener noreferrer">蜜蜂查</a>
          </span>)
      }
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('入门知识', knowledge)}
      {createSideCard('工具', tools)}
      {createSideCard('区块浏览器（BTC | ETH | EOS）', browsers)}
      {createSideCard('钱包', wallets)}
    </Col>
  </Row>
)

export default HomePage;