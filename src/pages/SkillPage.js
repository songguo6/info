import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { skills, applies } from '../data/skill';
import { createTableCard } from './common';

const columns_skills = [
  { title: '类型', dataIndex: 'type', key: 'type' },
  { title: '说明', dataIndex: 'info', key: 'info' },
]

const columns_applies = [
  { title: '类型', dataIndex: 'type', key: 'type' },    
  { title: '案例', dataIndex: 'examples', key: 'examples', render: (text) => 
    <span>
      {text.length >= 1 ? <a href={text[0].link} target='_blank' rel="noopener noreferrer" style={{marginRight: 30}}>{text[0].example}</a> : ''}
      {text.length === 2 ? <a href={text[1].link} target='_blank' rel="noopener noreferrer" style={{marginRight: 30}}>{text[1].example}</a> : ''}
    </span>
  },    
]

class SkillPage extends Component {

  render(){
    return (
      <Row gutter={24}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          {createTableCard('技能', columns_skills, skills)}
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          {createTableCard('行业应用（区块链+）', columns_applies, applies)}
        </Col>
      </Row>
    )
  }
}

export default SkillPage;