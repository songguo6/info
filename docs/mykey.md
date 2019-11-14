## [MYKEY](mykey.org)
- 资产维度：一款多链钱包，丢失私钥时可以冻结和恢复自己的账户；
- 社会关系维度
- 数据维度

## 账户体系
#### 管理私钥(0)
1、管理私钥用户本人持有，12个单词（字）的恢复码；
2、管理私钥可冻结和修改其他操作私钥，替换管理私钥本身，但不能直接操作账户（如转账）；
3、管理私钥单方面冻结操作私钥（立即生效）；
4、管理私钥单方面解冻操作私钥（延时7天生效）；
5、管理私钥联合紧急联络人解冻操作私钥（立即生效）；
6、管理私钥单方面更换操作私钥（延时7天生效）；
7、管理私钥联合紧急联络人更换操作私钥（立即生效）；
8、管理私钥单方面更换管理私钥（延时21天生效）；
9、管理私钥联合紧急联络人更换管理私钥（立即生效）；
10、管理私钥单方面撤销正在等待生效的（更换管理私钥、更换操作私钥、解冻操作私钥）操作（立即生效）；
11、管理私钥单方面添加/移除紧急联络人（延时21天生效）；
12、管理私钥添加操作私钥的类别（立即生效）。
#### 操作私钥
- 紧急协助任务的响应私钥(4)
1、配合被协助人的管理私钥更换管理私钥、更换操作私钥、解冻操作私钥（立即生效）；
2、紧急联络人单方面更换被协助人的管理私钥（30天生效）。
- 资产管理私钥（1）
- 特殊目的子账户操作私钥
- 登录私钥（3）
- 投票私钥
- 可验证声明的操作私钥

## 合约
[mykeymanager](https://bloks.io/account/mykeymanager)  
[mykeylogica1](https://bloks.io/account/mykeylogica1)  
[mkstaketoken](https://bloks.io/account/mkstaketoken)
#### 数据表
- keydata（管理公钥和操作公钥）
- defdata（延期执行的操作）
- backupdata（紧急联系人）
- propdata（待执行的多签提案）
- subacct（子账户）
- subassetsum（子账户资产总数）
- logic
- logicdata
```
cleos -u http://eospush.tokenpocket.pro get table mykeymanager mykeysbounty keydata
```

#### 合约调用
```
mykeylogica1::freeze(name to)
mykeylogica1::sendinternal(name internal_act, signature sig, bytes data)

mykeylogica1::propose(name client, name backup, name prop_act, uint64 data_index, public_key[] new_keys)
mykeylogica1::senddualsigs(name act, signature client_sig, signature backup_sig, bytes data)
mykeylogica1::executeprop(name client, name proposer, name act_approved, uint64 index)

mkstaketoken::transfer(name from, name to, asset quantity, string memo)
mykeylogica1::sendexternal(signature sig, bytes data)

mykeymanager::sendaction(name act, bytes bin_data)
```
1、管理私钥单方面冻结操作私钥（立即生效）
```
管理私钥 -> mykeylogica1::freeze -> mykeylogica1::sendinternal -> mykeymanager::sendaction
//mykeylogica1::freeze参数：['mykeysbounty']
```
2、管理私钥联合紧急联络人更换操作私钥（立即生效）
```
管理私钥 -> mykeylogica1::propose -> mykeylogica1::senddualsigs -> mykeymanager::sendaction
//mykeylogica1::propose参数：['mykeysbounty', 'bountybackup', 'chgalloprkey', 0, ['EOS6g1r3niQN664iBQbSWefAgchL9T672QPpfd5g5U7Mxr7hNq5ce','EOS6g1r3niQN664iBQbSWefAgchL9T672QPpfd5g5U7Mxr7hNq5ce','EOS6g1r3niQN664iBQbSWefAgchL9T672QPpfd5g5U7Mxr7hNq5ce']]
管理私钥 -> mykeylogica1::executeprop -> mykeymanager::sendaction
//mykeylogica1::executeprop参数：['mykeysbounty','mykeysbounty','chgalloprkey', 0]
```
3、转账
```
操作私钥1 -> mkstaketoken::transfer -> mykeylogica1::sendexternal -> mykeymanager::sendaction
//mkstaketoken::transfer参数：['mykeysbounty','songguo55555','10000.0000 KEY','']
```



