import React from 'react';
import { Row, Col } from 'antd';
import { createMainCard } from '../common';
import { fabric, fisco, xuperchain, cita, quorum, zxin } from '../../data/projects/alliances'

const AlliancesPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      {createMainCard('超级账本', fabric)}
      {createMainCard('FISCO金链盟', fisco)}
      {createMainCard('百度超级链', xuperchain)}
      {createMainCard('CITA', cita)}
      {createMainCard('企业以太坊Quorum', quorum)}
      {createMainCard('至信链', zxin)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
    </Col>
  </Row>
)

export default AlliancesPage;