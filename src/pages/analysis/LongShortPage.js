import React from 'react';
import { Row, Col } from 'antd';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const LongShortPage = () => (
  <Row gutter={24}>
    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      <h1 style={{textAlign:'center'}}>BTCUSDLONGS 多单持仓量</h1>
      <TradingViewWidget symbol='BITFINEX:BTCUSDLONGS' locale='zh_CN' width='100%' interval='D' theme={Themes.DARK}/>    
    </Col>

    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      <h1 style={{textAlign:'center'}}>BTCUSDSHORTS 空单持仓量</h1>
      <TradingViewWidget symbol='BITFINEX:BTCUSDSHORTS' locale='zh_CN' width='100%' interval='D' theme={Themes.DARK}/>    
    </Col>
  </Row>
)

export default LongShortPage;