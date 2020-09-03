import React from 'react';
import { Row, Col } from 'antd';
import { createCard3, createCard4 } from '../common';
import { 
  tezos, iris, neo, nervos, ont,
  cardano, algo, conflux, ela, nas, others
} from '../../data/projects/publics'

const PublicsPage = () => (
  <Row gutter={24}>
    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      {createCard3('Tezos', tezos)}
      {createCard3('IRISnet', iris)}
      {createCard3('NEO', neo)}
      {createCard3('Nervos', nervos)}
      {createCard3('ONTology', ont)}
    </Col>

    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      {createCard3('Cardano', cardano)}
      {createCard3('Algorand', algo)}
      {createCard3('星云链', nas)}
      {createCard3('亦来云', ela)}
      {createCard3('Conflux', conflux)}
      {createCard4('其他公链', others)}
    </Col>
  </Row>
)

export default PublicsPage;