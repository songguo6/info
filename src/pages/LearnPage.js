import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { posts, videos } from '../data/learn';
import { createTableCard } from './common';

const datas = [
  { title: '序号', dataIndex: 'id', key: 'id' },
  { title: '内容', dataIndex: 'content', key: 'content', render: (text, record) => <a href={record.link} target='_blank' rel="noopener noreferrer">{text}</a> },
]

class LearnPage extends Component {

  render(){
    return (
      <Row gutter={24}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          {createTableCard('文章', datas, posts)}
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          {createTableCard('视频', datas, videos)}
        </Col>
      </Row>
    )
  }
}

export default LearnPage;