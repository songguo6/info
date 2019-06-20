import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

class EosPage extends Component {
  render(){
    return (
      <Row gutter={24}>
        <Col xl={15} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title='EOS'
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

          </Card>
          <Card
            style={{ marginBottom: 24 }}
            bordered={false}
            title=''
          >

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

export default EosPage;