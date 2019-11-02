import React from 'react';
import { List } from 'antd';

const data = [
  {'title':'解锁钱包', 'info':'cleos wallet unlock'},
  {'title':'导入私钥到钱包', 'info':'cleos wallet import'},
  {'title':'购买RAM', 'info':'cleos -u https://api.eosnewyork.io system buyram gamesforboys gamesforboys "18.0000 EOS"'},
  {'title':'编译合约', 'info':'eosio-cpp -o gamesforboys.wasm gamesforboys.cpp --abigen'},
  {'title':'部署合约', 'info':'cleos -u https://api.eosnewyork.io set contract gamesforboys gamesforboys -p gamesforboys@active'},
];

const EosDevPage = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<a href="https://bihu.com/people/14150">{item.title}</a>}
          description={item.info}
        />
      </List.Item>
    )}
  />
)

export default EosDevPage;