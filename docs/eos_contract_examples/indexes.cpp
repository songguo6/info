#include <eosio/eosio.hpp>
#include <string>

using namespace eosio;
using namespace std;

CONTRACT indexes : public contract {
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

    item_table items(_self, _self.value);
    auto cur_item = items.emplace(account, [&](auto &item){
      item.id = items.available_primary_key();
      item.name = name;
      item.owner = account;
    });
  }

  ACTION get(const name account){
    item_table items(_self, _self.value);
    auto player_items = items.get_index<"byowner"_n>();
    auto itr = player_items.lower_bound(account.value);

    while(itr != player_items.end()){
      print(itr->name, " ");
      itr++;
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
    eosio::name owner;

    uint64_t primary_key() const { return id; }  
    uint64_t get_owner() const { return owner.value; }  
  };  

  typedef multi_index<"player"_n, playertable> player_table;
  typedef multi_index<"item"_n, itemtable,
    indexed_by<"byowner"_n, const_mem_fun<itemtable, uint64_t, &itemtable::get_owner>>
  > item_table;
};