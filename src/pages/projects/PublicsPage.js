import React from 'react';
import { Row, Col } from 'antd';
import { createCard3 } from '../common';
import { tezos, iris, neo, nervos, cardano, algo, conflux } from '../../data/projects/publics'

const PublicsPage = () => (
  <Row gutter={24}>
    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      {createCard3('Tezos', tezos)}
      {createCard3('IRISnet', iris)}
      {createCard3('NEO', neo)}
      {createCard3('Nervos', nervos)}
    </Col>

    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      {createCard3('Cardano', cardano)}
      {createCard3('Algorand', algo)}
      {createCard3('Conflux', conflux)}
    </Col>
  </Row>
)

export default PublicsPage;