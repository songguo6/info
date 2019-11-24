#include <eosio/eosio.hpp>
#include <string>

using namespace eosio;
using namespace std;

CONTRACT scope : public contract {
public:
  using contract::contract;

  ACTION signup(const name account){
    require_auth(account);

    player_table players(_self, _self.value);
    auto itr = players.find(account.value);
    check(itr == players.end(), "Account already registered");

    players.emplace(account, [&](auto &user){
      user.account = account;
    });
  }

  ACTION add(const name account, string name){
    require_auth(account);

    item_table items(_self, account.value);
    auto cur_item = items.emplace(account, [&](auto &item){
      item.id = items.available_primary_key();
      item.name = name;
    });
  }

  ACTION get(const name account){
    item_table items(_self, account.value);
    for(auto &item : items){
      print(item.name, " ");
    }
  }

private:
  TABLE playertable {
    name account;
    uint64_t primary_key() const { return account.value; }
  };

  TABLE itemtable {
    uint64_t id;
    string name;
    uint64_t primary_key() const { return id; }  
  };  

  typedef multi_index<"player"_n, playertable> player_table;
  typedef multi_index<"item"_n, itemtable> item_table;
};