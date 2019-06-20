import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { createItem } from '../common';
import { exchanges, dxchanges, links, infos, tools } from '../../data/home';

class HomePage extends Component {

  render(){
    return (
      <Row gutter={24}>
        <Col xl={15} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title='交易所公告'
            extra={
              <span>
                <a href="https://www.feixiaohao.com/exchange/notice" target="_blank" rel="noopener noreferrer">非小号&nbsp;|&nbsp;</a>
                <a href="https://www.mytoken.io/media/notice" target="_blank" rel="noopener noreferrer">MyToken</a>
              </span>
            }
          >
            {
              exchanges.map((item, index) => (
                createItem(item, index)
              ))
            }
          </Card>

          <Card
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title='去中心化交易所'
          >
            {
              dxchanges.map((item, index) => (
                createItem(item, index)
              ))
            }
          </Card>
        </Col>

        <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            title='行情'
            bordered={false}
            bodyStyle={{ padding: 0 }}
          >
            {
              links.map((item, index) => (
                createItem(item, index, '33.33%')
              ))
            }
          </Card>
          <Card
            style={{ marginBottom: 24 }}
            bordered={false}
            title='资讯'
          >
            {
              infos.map((item, index) => (
                createItem(item, index, '33.33%')
              ))
            }
          </Card>
          <Card
            bodyStyle={{ marginBottom: 24 }}
            bordered={false}
            title='工具'
          >
            {
              tools.map((item, index) => (
                createItem(item, index, '33.33%')
              ))
            }
          </Card>
        </Col>
      </Row>
    )
  }
}

export default HomePage;