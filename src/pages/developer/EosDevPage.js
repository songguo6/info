import React from 'react';
import { List } from 'antd';

const data = [
  {'t':'解锁钱包', 'i':'cleos wallet unlock'},
  {'t':'导入私钥到钱包', 'i':'cleos wallet import'},
  {'t':'购买RAM', 'i':'cleos -u https://api.eosnewyork.io system buyram gamesforboys gamesforboys "18.0000 EOS"'},
  {'t':'编译合约', 'i':'eosio-cpp -o gamesforboys.wasm gamesforboys.cpp --abigen'},
  {'t':'部署合约', 'i':'cleos -u https://api.eosnewyork.io set contract gamesforboys gamesforboys -p gamesforboys@active'},
  {'t':'调用合约', 'i':'cleos -u https://api.eosnewyork.io push action gamesforboys init \'[]\' -p gamesforboys'},
  {'t':'设置eosio.code权限', 'i':'cleos -u https://api.eosnewyork.io set account permission gamesforboys active \'{"threshold": 1,"keys": [{"key": "EOS5DBwXHwmq9igQe39w6LRDHZmb7EjrALXAnATvxoeYLpHxWgPS7","weight": 1}],"accounts": [{"permission":{"actor":"gamesforboys","permission":"eosio.code"},"weight":1}]}\' owner -p gamesforboys'},
  {'t':'充值EOS到Rexfund', 'i':'cleos -u https://api.eosnewyork.io system rex deposit gamesforboys "2.0000 EOS" -p gamesforboys'},
  {'t':'租用CPU', 'i':'cleos -u https://api.eosnewyork.io system rex rentcpu gamesforboys gamesforboys "2.0000 EOS" "0.0000 EOS"'},
];

const EosDevPage = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<a href="https://bihu.com/people/14150" target="_blank">{item.t}</a>}
          description={item.i}
        />
      </List.Item>
    )}
  />
)

export default EosDevPage;