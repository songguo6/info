import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { browsers, tools } from '../../data/btc';
import { createItem } from '../common';

class BtcPage extends Component {
  render(){
    return (
      <Row gutter={24}>
        <Col xl={15} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title='BTC'
          >
            
          </Card>

          <Card
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title=''
          >
          </Card>
        </Col>

        <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            title='区块浏览器'
            bordered={false}
            bodyStyle={{ padding: 0 }}
          >
            {
              browsers.map((item, index) => (
                createItem(item, index, '33.33%')
              ))
            }      
          </Card>
          <Card
            style={{ marginBottom: 24 }}
            bordered={false}
            title='工具'
          >
            {
              tools.map((item, index) => (
                createItem(item, index, '33.33%')
              ))
            } 
          </Card>
          <Card
            bodyStyle={{ marginBottom: 24 }}
            bordered={false}
            title=''
          >

          </Card>
        </Col>
      </Row>
    )
  }
}

export default BtcPage;