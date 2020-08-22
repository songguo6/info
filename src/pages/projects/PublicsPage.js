import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { conflux } from '../../data/projects/publics'

const PublicsPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('Conflux', conflux)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default PublicsPage;