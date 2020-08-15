import React, { Component } from 'react';
import { Row, Col, Table, Card } from 'antd';

import { UP, DOWN, nvt } from '../../data/analysis/indicator';

const NVTcolumns = [{ 
  title: 'NVT时间段', 
  dataIndex: 'nvt_period', 
  key: 'nvt_period', 
  width: '200px',
},{ 
  title: 'NVT走势', 
  dataIndex: 'nvt', 
  key: 'nvt', 
  render: text => text.map(item => <span style={{color: item === UP ? 'green' : (item === DOWN ? 'red' : 'black')}}>{item}&nbsp;</span>),
},{ 
  title: 'BTC时间段', 
  dataIndex: 'btc_period', 
  key: 'btc_period', 
  width: '300px',
},{ 
  title: 'BTC价格走势', 
  dataIndex: 'btc', 
  key: 'btc', 
  render: text => text.map(item => <span style={{color: item === UP ? 'green' : (item === DOWN ? 'red' : 'black')}}>{item}&nbsp;</span>),
},];

class IndicatorAnalysisPage extends Component{

  render(){
    return(
      <Row gutter={24}>
        <Col xl={22} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24 }}
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title={<span style={{fontWeight: 'bold'}}>NVT数据分段分析</span>}
          >
            <Table columns={NVTcolumns} dataSource={nvt} />
          </Card>
        </Col>
      </Row>
    )
  }
}

export default IndicatorAnalysisPage;