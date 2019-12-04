import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { medium, twitter, websites } from '../../data/media';

const MediaPage = () => (
  <Row gutter={24}>
    <Col xl={18} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('Medium', medium)}
      {createMainCard('Twitter', twitter)}
      {createMainCard('Websites', websites)}
    </Col>
  </Row>
)

export default MediaPage;