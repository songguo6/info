import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { indexs } from '../../data/finance';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const FinancePage = () => (
  <Fragment>
    <Row gutter={24}>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <h1 style={{textAlign:'center'}}>道琼斯工业平均指数</h1>
        <TradingViewWidget symbol='DJCFD:DJI' locale='zh_CN' width='100%' interval='M' theme={Themes.DARK}/>    
      </Col>

      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <h1 style={{textAlign:'center'}}>纳斯达克-苹果公司</h1>
        <TradingViewWidget symbol='NASDAQ:AAPL' locale='zh_CN' width='100%' interval='M' theme={Themes.DARK}/>    
      </Col>
    </Row>
    <br/>
    {createMainCard('财经指数', indexs)}
  </Fragment>
)

export default FinancePage;