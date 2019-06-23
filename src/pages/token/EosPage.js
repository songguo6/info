import React from 'react';
import { Row, Col } from 'antd';
import { createSideCard } from '../common';
import TradingViewWidget from 'react-tradingview-widget';

const EosPage = () => (
  <Row gutter={24}>
    <Col xl={19} lg={24} md={24} sm={24} xs={24}>
      <TradingViewWidget symbol="BINANCE:EOSUSDT" locale='zh_CN' width='1400'/>    
    </Col>

    <Col xl={5} lg={24} md={24} sm={24} xs={24}>
      {createSideCard('区块浏览器', [])}
      {createSideCard('工具', [])}
      {createSideCard('其他', [])}
    </Col>
  </Row>
)

export default EosPage;