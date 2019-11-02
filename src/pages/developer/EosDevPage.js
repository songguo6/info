import React from 'react';
import { Row, Col } from 'antd';

const i = (title, info) => (
  <div>
    <h4>{title}</h4>
    <h6>{info}</h6>
  </div>
)

const EosDevPage = () => (
  <Row gutter={24}>
    <Col xl={15} lg={24} md={24} sm={24} xs={24}>
      {i('解锁钱包', 'cleos wallet unlock')}
      {i('导入私钥到钱包', 'cleos wallet import')}
      {i('购买RAM', "cleos -u https://api.eosnewyork.io system buyram gamesforboys gamesforboys '18.0000 EOS'")}
      {i('编译合约', 'eosio-cpp -o gamesforboys.wasm gamesforboys.cpp --abigen')}
      {i('部署合约', 'cleos -u https://api.eosnewyork.io set contract gamesforboys gamesforboys -p gamesforboys@active')}
    </Col>

    <Col xl={9} lg={24} md={24} sm={24} xs={24}>

    </Col>
  </Row>
)

export default EosDevPage;