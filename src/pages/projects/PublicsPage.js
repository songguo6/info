import React from 'react';
import { Row, Col } from 'antd';
import { createCard4 } from '../common';
import { 
  tezos, iris, neo, nervos, ont,
  cardano, algo, conflux, ela, nas, others
} from '../../data/projects/publics'

const PublicsPage = () => (
  <Row gutter={24}>
    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      {createCard4('Tezos', tezos)}
      {createCard4('IRISnet', iris)}
      {createCard4('NEO', neo)}
      {createCard4('Nervos', nervos)}
      {createCard4('ONTology', ont)}
    </Col>

    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
      {createCard4('Cardano', cardano)}
      {createCard4('Algorand', algo)}
      {createCard4('星云链', nas)}
      {createCard4('亦来云', ela)}
      {createCard4('Conflux', conflux)}
      {createCard4('其他公链', others)}
    </Col>
  </Row>
)

export default PublicsPage;