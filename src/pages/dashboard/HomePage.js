import React from 'react';
import { Row, Col } from 'antd';
import { createSideCard, createMainCard } from '../common';
import { 
  navigations, klines, indexs, infos, evaluations,
  exchanges, 
  tools, resources, browsers, icos, candies, 
} from '../../data/home';

const HomePage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('综合导航', navigations)}
      {createMainCard('综合指标', indexs)}
      {createMainCard('K线', klines)}
      {createMainCard('资讯站', infos)}
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
      {createSideCard('工具', tools)}
      {createSideCard('资源', resources)}
      {createSideCard('ICO & IEO', icos)}
      {createSideCard('多币种区块浏览器', browsers)}
      {createSideCard('糖果空投', candies)}
    </Col>
  </Row>
)

export default HomePage;