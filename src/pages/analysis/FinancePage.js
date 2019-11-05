import React from 'react';
import { Row, Col } from 'antd';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const FinancePage = () => (
  <Col>
    <Row gutter={24}>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <h1 style={{textAlign:'center'}}>道琼斯工业平均指数</h1>
        <TradingViewWidget symbol='DJCFD:DJI' locale='zh_CN' width='100%' interval='M' theme={Themes.DARK}/>    
      </Col>

      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <h1 style={{textAlign:'center'}}>标准普尔500指数</h1>
        <TradingViewWidget symbol='SPCFD:SPX' locale='zh_CN' width='100%' interval='M' theme={Themes.DARK}/>    
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <h1 style={{textAlign:'center'}}>比特币/美元</h1>
        <TradingViewWidget symbol='BITFINEX:BTCUSD' locale='zh_CN' width='100%' interval='M' theme={Themes.DARK}/>    
      </Col>
    </Row>
  </Col>
)

export default FinancePage;