import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';

import { indicators } from '../../data/indicator';

const columns = [{ 
  title: '名称', 
  dataIndex: 'name', 
  key: 'name', 
  width: '100px',
},{ 
  title: '说明', 
  dataIndex: 'info', 
  key: 'info', 
  width: '500px',
},{
  title: '数据图表',
  dataIndex: 'charts',
  key: 'charts',
  render: charts => charts.map(item => <div className='mb'><a href={item.link} target='_blank' rel="noopener noreferrer">{item.title}</a></div>),
},{
  title: '相关文章',
  dataIndex: 'articles',
  key: 'articles',
  render: articles => articles.map(item => <div className='mb'><a href={item.link} target='_blank' rel="noopener noreferrer">{item.title}</a></div>),
}];

class IndicatorPage extends Component{

  render(){
    return(
      <Row gutter={24}>
        <Col xl={20} lg={24} md={24} sm={24} xs={24}>
          <Table columns={columns} dataSource={indicators} />
        </Col>
      </Row>
    )
  }
}

export default IndicatorPage;