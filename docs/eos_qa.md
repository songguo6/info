## 为什么无法再从REX借出EOS？

eosio.contracts/contracts/eosio.system/src/rex.cpp/system_contract::fill_rex_order
```
const int64_t unlent_lower_bound = ( uint128_t(2) * rexitr->total_lent.amount ) / 10;
const int64_t available_unlent   = rexitr->total_unlent.amount - unlent_lower_bound;
```
一种调用路径：  
rentcpu -> rent_rex -> runrex(2) -> fill_rex_order  
cleos -u http://eospush.tokenpocket.pro get table eosio eosio rexpool
```
{
  "rows": [{
      "version": 0,
      "total_lent": "79719557.3409 EOS",
      "total_unlent": "15944018.1225 EOS",
      "total_rent": "91516.3926 EOS",
      "total_lendable": "95663575.4634 EOS",
      "total_rex": "953711689412.0579 REX",
      "namebid_proceeds": "0.0000 EOS",
      "loan_num": 225095
    }
  ],
  "more": false
}
```
代入得：  
```
unlent_lower_bound = 79719557.3409 * 2 / 10 = 15943911.4
available_unlent = 15944018.1225 - 15943911.4 = 106.7225
```
## 合约如何实现为用户支付CPU？
