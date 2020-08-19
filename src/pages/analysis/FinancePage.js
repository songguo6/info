import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { indexs } from '../../data/analysis/finance';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const FinancePage = () => (
  <Fragment>
    <Row gutter={24}>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <h1 style={{textAlign:'center'}}>纽交所-阿里巴巴</h1>
        <TradingViewWidget symbol='NYSE:BABA' locale='zh_CN' width='100%' interval='W' theme={Themes.DARK}/>    
      </Col>

      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        <h1 style={{textAlign:'center'}}>纳斯达克-苹果公司</h1>
        <TradingViewWidget symbol='NASDAQ:AAPL' locale='zh_CN' width='100%' interval='W' theme={Themes.DARK}/>    
      </Col>
    </Row>
    <br/>
    {createMainCard('财经指数', indexs, '', '12.5%')}
  </Fragment>
)

export default FinancePage;