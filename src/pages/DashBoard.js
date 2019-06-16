import React, { Component } from 'react';
import { Row, Col, Card, Avatar } from 'antd';

class DashBoard extends Component {
  render(){
    return (
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            title='交易所公告'
            bordered={false}
            extra={<span><a href=''>更多1</a>&nbsp;<a href="">更多2</a></span>}
            bodyStyle={{ padding: 0 }}
          >
            <Card.Grid>
              <Card bodyStyle={{ padding: 0 }} bordered={false}>
                <Card.Meta
                  title={
                    <div>
                      <Avatar size="small" src="https://s1.bqiapp.com/image/20181119/huobipro_mid.png" />
                      <a href=''>&nbsp;火币全球站</a>
                    </div>
                  }
                />
              </Card>
            </Card.Grid>
          </Card>

          <Card
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title="动态"
          >
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