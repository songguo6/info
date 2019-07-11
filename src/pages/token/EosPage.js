import React from 'react';
import { Row, Col } from 'antd';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { createMainCard, createSideCard } from '../common';
import { browsers, tools, infos } from '../../data/eos';

const EosPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      <div style={{marginBottom: 24}}>
        <TradingViewWidget symbol='BINANCE:EOSUSDT' locale='zh_CN' width='100%' interval='120' theme={Themes.DARK}/>   
      </div>
      {createMainCard('区块浏览器', browsers)} 
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('工具', tools, '50%')}
      {createSideCard('资讯', infos, '50%')}
    </Col>
  </Row>
)

export default EosPage;