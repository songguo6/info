import React from 'react';
import { List } from 'antd';

const data = [
  {'t':'解锁钱包', 'i':'cleos wallet unlock'},
  {'t':'导入私钥到钱包', 'i':'cleos wallet import'},
  {'t':'编译合约', 'i':'eosio-cpp -o gamesforboys.wasm gamesforboys.cpp --abigen'},
  {'t':'购买RAM', 'i':'cleos -u https://api.eosnewyork.io system buyram gamesforboys gamesforboys "18.0000 EOS"'},
  {'t':'部署合约', 'i':'cleos -u https://api.eosnewyork.io set contract gamesforboys gamesforboys -p gamesforboys@active'},
  {'t':'调用合约', 'i':'cleos -u https://api.eosnewyork.io push action gamesforboys init \'[]\' -p gamesforboys'},
  {'t':'设置eosio.code权限', 'i':'cleos -u https://api.eosnewyork.io set account permission gamesforboys active \'{"threshold": 1,"keys": [{"key": "EOS5DBwXHwmq9igQe39w6LRDHZmb7EjrALXAnATvxoeYLpHxWgPS7","weight": 1}],"accounts": [{"permission":{"actor":"gamesforboys","permission":"eosio.code"},"weight":1}]}\' owner -p gamesforboys'},
  {'t':'设置eosio.code权限（同账号）', 'i':'cleos set account permission gamesforboys active --add-code'},
  {'t':'充值EOS到Rexfund', 'i':'cleos -u https://api.eosnewyork.io system rex deposit gamesforboys "2.0000 EOS" -p gamesforboys'},
  {'t':'租用CPU', 'i':'cleos -u https://api.eosnewyork.io system rex rentcpu gamesforboys gamesforboys "2.0000 EOS" "0.0000 EOS"'},
  {'t':'查询数据表', 'i':'cleos -u https://api.eosnewyork.io get table gamesforboys gamesforboys global'},
  {'t':'创建账户', 'i':"cleos system newaccount --stake-net '1.0000 EOS' --stake-cpu '1.0000 EOS' --buy-ram-kbytes 4 gamesforboys newaccount12 EOS6W8V9TguKRMWGrGKcfBPNAPSdk1asKL5QnwbFZV7fJyNMNRLN5"},
  {'t':'修改权限（owner）', 'i':'cleos -u https://api.eosnewyork.io push action eosio updateauth \'["<account_name>","owner","",{"threshold":1,"keys":[{"key":"EOS8FqXhJo22AHGAGCcHEDPnyg3rphfVo7fRigZwnBU7nExWrQFyt","weight":1}],"accounts":[],"waits":[]}]\' -p <account_name>@owner'},
  {'t':'修改权限（active）', 'i':'cleos -u https://api.eosnewyork.io push action eosio updateauth \'["<account_name>","active","owner",{"threshold":1,"keys":[{"key":"EOS8FqXhJo22AHGAGCcHEDPnyg3rphfVo7fRigZwnBU7nExWrQFyt","weight":1}],"accounts":[],"waits":[]}]\' -p <account_name>@owner'},
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