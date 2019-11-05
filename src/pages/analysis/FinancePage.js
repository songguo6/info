import React from 'react';
import { Row, Col } from 'antd';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const FinancePage = () => (
  <Row gutter={24}>
    <Col xl={8} lg={24} md={24} sm={24} xs={24}>
      <h1 style={{textAlign:'center'}}>道琼斯工业平均指数</h1>
      <TradingViewWidget symbol='DJCFD:DJI' locale='zh_CN' width='100%' interval='M' theme={Themes.DARK}/>    
    </Col>

    <Col xl={8} lg={24} md={24} sm={24} xs={24}>
      <h1 style={{textAlign:'center'}}>BTCUSDSHORTS 空单持仓量</h1>
      <TradingViewWidget symbol='BITFINEX:BTCUSDSHORTS' locale='zh_CN' width='100%' interval='D' theme={Themes.DARK}/>    
    </Col>
  </Row>
)

export default FinancePage;