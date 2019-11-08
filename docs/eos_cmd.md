# 钱包和私钥

#### 解锁钱包
cleos wallet unlock
#### 导入私钥到钱包
cleos wallet import

# 账户和权限

#### 创建账户
cleos system newaccount --stake-net '0.2500 EOS' --stake-cpu '1.0000 EOS' --buy-ram-kbytes 4 gamesforboys newaccount12 EOS6W8V9TguKRMWGrGKcfBPNAPSdk1asKL5QnwbFZV7fJyNMNRLN5
#### 设置eosio.code权限
cleos -u https://api.eosnewyork.io set account permission gamesforboys active '{"threshold": 1,"keys": [{"key": "EOS5DBwXHwmq9igQe39w6LRDHZmb7EjrALXAnATvxoeYLpHxWgPS7","weight": 1}],"accounts": [{"permission":{"actor":"gamesforboys","permission":"eosio.code"},"weight":1}]}' owner -p gamesforboys
#### 设置eosio.code权限（同账号）
cleos set account permission gamesforboys active --add-code
#### 修改权限（owner）
cleos -u https://api.eosnewyork.io push action eosio updateauth '["<account_name>","owner","",{"threshold":1,"keys":[{"key":"EOS8FqXhJo22AHGAGCcHEDPnyg3rphfVo7fRigZwnBU7nExWrQFyt","weight":1}],"accounts":[],"waits":[]}]' -p <account_name>@owner
#### 修改权限（active）
cleos -u https://api.eosnewyork.io push action eosio updateauth '["<account_name>","active","owner",{"threshold":1,"keys":[{"key":"EOS8FqXhJo22AHGAGCcHEDPnyg3rphfVo7fRigZwnBU7nExWrQFyt","weight":1}],"accounts":[],"waits":[]}]' -p <account_name>@owner

# 智能合约

#### 编译合约
eosio-cpp -o gamesforboys.wasm gamesforboys.cpp --abigen
#### 购买RAM
cleos -u https://api.eosnewyork.io system buyram gamesforboys gamesforboys "18.0000 EOS"
#### 部署合约
cleos -u https://api.eosnewyork.io set contract gamesforboys gamesforboys -p gamesforboys@active
#### 调用合约
cleos -u https://api.eosnewyork.io push action gamesforboys init '[]' -p gamesforboys

# REX

#### 充值EOS到Rexfund
cleos -u https://api.eosnewyork.io system rex deposit gamesforboys "2.0000 EOS" -p gamesforboys
#### 租用CPU
cleos -u https://api.eosnewyork.io system rex rentcpu gamesforboys gamesforboys "2.0000 EOS" "0.0000 EOS"
#### 查询数据表
cleos -u https://api.eosnewyork.io get table gamesforboys gamesforboys global

# MYKEY

# API节点



