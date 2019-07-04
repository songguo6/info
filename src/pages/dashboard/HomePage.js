import React from 'react';
import { Row, Col } from 'antd';
import { createSideCard, createMainCard } from '../common';
import { 
  navigations, infos, forums, evaluations, 
  exchanges, dxchanges, oxchanges, 
  tools, resources, browsers, icos, candies, 
} from '../../data/home';

const HomePage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('行情站', navigations)}
      {createMainCard('资讯站', infos)}
      {createMainCard('论坛 & 社区', forums)}
      {createMainCard('项目测评', evaluations)}
      {
        createMainCard('交易所公告', exchanges, 
          <span>
            <a href="https://www.feixiaohao.com/exchange/notice" target="_blank" rel="noopener noreferrer">非小号&nbsp;|&nbsp;</a>
            <a href="https://www.mytoken.io/media/notice" target="_blank" rel="noopener noreferrer">MyToken&nbsp;|&nbsp;</a>
            <a href="https://block.cc/notice" target="_blank" rel="noopener noreferrer">蜜蜂查</a>
          </span>)
      }
      {createMainCard('去中心化交易所', dxchanges)}
      {createMainCard('场外交易所', oxchanges)}
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