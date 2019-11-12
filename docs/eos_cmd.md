## 钱包 & 私钥
#### 解锁钱包
cleos wallet unlock
#### 创建一对公私钥
cleos create key --to-console
#### 导入私钥到钱包
cleos wallet import
#### 创建一对公私钥并导入到钱包
cleos wallet create_key
#### 列出所有公私密钥对
cleos wallet private_keys

## 账户 & 权限
#### 创建账户
cleos -u http://eospush.tokenpocket.pro system newaccount --stake-net '0.2500 EOS' --stake-cpu '1.0000 EOS' --buy-ram-kbytes 4 gamesforboys <account_name> <public_key>
#### 修改权限（owner）
cleos -u http://eospush.tokenpocket.pro push action eosio updateauth '["<account_name>","owner","",{"threshold":1,"keys":[{"key":"EOS8FqXhJo22AHGAGCcHEDPnyg3rphfVo7fRigZwnBU7nExWrQFyt","weight":1}],"accounts":[],"waits":[]}]' -p <account_name>@owner
#### 修改权限（active）
cleos -u http://eospush.tokenpocket.pro push action eosio updateauth '["<account_name>","active","owner",{"threshold":1,"keys":[{"key":"EOS8FqXhJo22AHGAGCcHEDPnyg3rphfVo7fRigZwnBU7nExWrQFyt","weight":1}],"accounts":[],"waits":[]}]' -p <account_name>@owner
#### 设置eosio.code权限
cleos -u http://eospush.tokenpocket.pro set account permission gamesforboys active '{"threshold": 1,"keys": [{"key": "EOS5DBwXHwmq9igQe39w6LRDHZmb7EjrALXAnATvxoeYLpHxWgPS7","weight": 1}],"accounts": [{"permission":{"actor":"gamesforboys","permission":"eosio.code"},"weight":1}]}' owner -p gamesforboys
#### 设置eosio.code权限（同账号）
cleos -u http://eospush.tokenpocket.pro set account permission gamesforboys active --add-code

## 数据查询
#### 账户信息
cleos -u http://eospush.tokenpocket.pro get account songguo55555
#### 数据域
cleos -u http://eospush.tokenpocket.pro get scope mykeymanager
#### 数据表
cleos -u http://eospush.tokenpocket.pro get table eosio eosio global
#### 某账户某代币余额
cleos -u http://eospush.tokenpocket.pro get currency balance mkstaketoken songguo55555
#### 某代币供应量
cleos -u http://eospush.tokenpocket.pro get currency stats mkstaketoken KEY
#### 某账户控制的其他账户
cleos -u http://eospush.tokenpocket.pro get servants gamesforboys
#### 当前出块节点
cleos -u http://eospush.tokenpocket.pro get schedule

## 智能合约
#### 编译合约
eosio-cpp -o gamesforboys.wasm gamesforboys.cpp --abigen
#### 部署合约
cleos -u http://eospush.tokenpocket.pro set contract gamesforboys gamesforboys -p gamesforboys@active
#### 调用合约
cleos -u http://eospush.tokenpocket.pro push action gamesforboys run '[]' -p gamesforboys
#### 某账户是否部署了合约
cleos -u http://eospush.tokenpocket.pro get code gamesforboys
#### 删除合约
cleos -u http://eospush.tokenpocket.pro set contract gamesforboys --clear

## 交易 & 资源
#### 转账EOS
cleos -u http://eospush.tokenpocket.pro transfer gamesforboys songguo55555 '0.0001 EOS'
#### 购买RAM
cleos -u http://eospush.tokenpocket.pro system buyram gamesforboys gamesforboys '18.0000 EOS'
#### 出售RAM（字节）
cleos -u http://eospush.tokenpocket.pro system sellram gamesforboys 1024
#### 抵押EOS获取CPU/NET
cleos -u http://eospush.tokenpocket.pro system delegatebw gamesforboys gamesforboys '0.0001 EOS' '0.0001 EOS'
#### 取消抵押
cleos -u http://eospush.tokenpocket.pro system undelegatebw gamesforboys gamesforboys '0.0001 EOS' '0.0001 EOS'

## REX
#### 充值EOS到Rexfund
cleos -u http://eospush.tokenpocket.pro system rex deposit gamesforboys '2.0000 EOS' -p gamesforboys
#### 从Rexfund提出EOS
cleos -u http://eospush.tokenpocket.pro system rex withdraw gamesforboys '2.0000 EOS'
#### 查询某账户的Rexfund
cleos -u http://eospush.tokenpocket.pro get table eosio eosio rexfund -L gamesforboys -l 1
#### 租用CPU
cleos -u http://eospush.tokenpocket.pro system rex rentcpu gamesforboys gamesforboys '2.0000 EOS' '0.0000 EOS'
#### 查询某账户的CPU租用记录
cleos -u http://eospush.tokenpocket.pro get table eosio eosio cpuloan -L gamesforboys -U gamesforboys --index 3 --key-type i64
#### 更多
https://bihu.com/article/1289164097

## API节点
#### 主网
https://api.eosnewyork.io  
http://eospush.tokenpocket.pro  
http://openapi.eos.ren  
#### 测试网
http://jungle2.cryptolions.io

## [eosq](https://eosq.app)高精度搜索
#### 某账户的所有EOS转账
receiver:eosio.token account:eosio.token action:transfer (data.from:songguo55555 OR data.to:songguo55555)
#### 两个账户间的EOS转账
receiver:eosio.token account:eosio.token action:transfer data.from:gamesforboys data.to:songguo55555
#### 某账户签名的所有交易
auth:songguo55555
#### 某账户泛代币查询
data.to:songguo55555

## [MYKEY](https://github.com/mykeylab)
#### 合约账户
[mykeymanager](https://bloks.io/account/mykeymanager)  
[mykeylogica1](https://bloks.io/account/mykeylogica1)  

## 编解码
#### 助记词 -> 私钥
./mnemonicTool-linux -mnemonic "ask language rude digital glare thumb civil cousin urban trial lake second"