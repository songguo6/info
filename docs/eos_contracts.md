#### [EIDOS](https://github.com/enumivo/eidos)（Token分发）
```
[[eosio::on_notify("eosio.token::transfer")]]
void claim(name from, name to, eosio::asset quantity, std::string memo);
```