import React from 'react';
import { Row, Col } from 'antd';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import TechnicalAnalysisWidget from '../../components/tradingview/TechnicalAnalysisWidget';
import { createSideCard } from '../common';

const EosPage = () => (
  <Row gutter={24}>
    <Col xl={18} lg={24} md={24} sm={24} xs={24}>
      <TradingViewWidget symbol="BINANCE:EOSUSDT" locale='zh_CN' width='100%' theme={Themes.DARK}/>    
    </Col>

    <Col xl={6} lg={24} md={24} sm={24} xs={24}>
      <TechnicalAnalysisWidget isTransparent={true} />
      {createSideCard('区块浏览器', [])}
      {createSideCard('工具', [])}
      {createSideCard('其他', [])}
    </Col>
  </Row>
)

export default EosPage;