import React from 'react';
import { Row, Col } from 'antd';
import { createCard3 } from '../common';
import { fabric, fisco, xuperchain, cita, quorum, corda, zxin } from '../../data/projects/alliances'

const AlliancesPage = () => (
  <Row gutter={24}>
    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      {createCard3('超级账本', fabric)}
      {createCard3('FISCO金链盟', fisco)}
      {createCard3('百度超级链', xuperchain)}
      {createCard3('CITA', cita)}
    </Col>

    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      {createCard3('企业以太坊Quorum', quorum)}
      {createCard3('Corda', corda)}
      {createCard3('至信链', zxin)}
    </Col>
  </Row>
)

export default AlliancesPage;