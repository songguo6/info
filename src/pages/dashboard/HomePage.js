import React from 'react';
import { Row, Col } from 'antd';
import { createCard3, createCard } from '../common';
import { 
  navigations, indexs, infos, evaluations, 
  exchanges, tools, dapps, knowledge, browsers, wallets, invest
} from '../../data/dashboard/home';

const HomePage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createCard('综合导航', navigations)}
      {createCard('综合指标', indexs)}
      {createCard('资讯站 & 社区', infos)}
      {createCard('项目测评', evaluations)}
      {
        createCard('交易所', exchanges, '20%',
          <span>
            <a href="https://www.feixiaohao.com/exchange/notice" target="_blank" rel="noopener noreferrer">非小号&nbsp;|&nbsp;</a>
            <a href="https://block.cc/notice" target="_blank" rel="noopener noreferrer">蜜蜂查</a>
          </span>)
      }
      {createCard('投资机构', invest)}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>
      {createCard3('入门知识', knowledge)}
      {createCard3('工具', tools)}
      {createCard3('区块浏览器（BTC | ETH | EOS）', browsers)}
      {createCard3('DAPP', dapps)}
      {createCard3('钱包', wallets)}
    </Col>
  </Row>
)

export default HomePage;