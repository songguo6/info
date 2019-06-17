import React, { Component } from 'react';
import { Row, Col, Card, Avatar, Icon } from 'antd';
import { exchanges, dxchanges } from '../data';

class DashBoard extends Component {

  createExItem(item, index){
    return (
      <Card.Grid key={index} style={{width: '20%'}}>
        <Card bodyStyle={{ padding: 0 }} bordered={false}>
          <Card.Meta
            title={
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Avatar src={item.logo} />&nbsp;&nbsp;&nbsp;
                {item.name}&nbsp;&nbsp;&nbsp;
                {item.star ? <Icon type='star' theme='twoTone' twoToneColor='orange' /> : ''}
              </a>
            }
          />
        </Card>
      </Card.Grid>
    )
  }

  render(){
    return (
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title='交易所公告'
          >
            {
              exchanges.map((item, index) => (
                this.createExItem(item, index)
              ))
            }
          </Card>

          <Card
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title="去中心化交易所"
          >
            {
              dxchanges.map((item, index) => (
                this.createExItem(item, index)
              ))
            }
          </Card>
        </Col>

        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            title="便捷导航"
            bordered={false}
            bodyStyle={{ padding: 0 }}
          >
  
          </Card>
          <Card
            style={{ marginBottom: 24 }}
            bordered={false}
            title="XX指数"
          >
          </Card>
          <Card
            bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
            bordered={false}
            title="技术指标"
          >
            
          </Card>
        </Col>

      </Row>
    )
  }
}

export default DashBoard;