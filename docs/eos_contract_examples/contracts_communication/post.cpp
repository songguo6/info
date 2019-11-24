#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
#include <string>
#include "user.cpp"

using namespace eosio;
using std::string;

CONTRACT post : public contract {
public:
  using contract::contract;

  ACTION publish(const name username, const string &msg){
    require_auth(username);

    config_table configs(_self, _self.value);
    configtable cur_config = configs.get();

    user::validate_action validate(cur_config.user_contract, {_self, "active"_n});
    validate.send(username);

    post_table posts(_self, _self.value);
    posts.emplace(username, [&](auto &post){
      post.id = posts.available_primary_key();
      post.author = username;
      post.msg = msg;
    });
  }

  ACTION remove(const uint64_t id){
    post_table posts(_self, _self.value);
    auto itr = posts.find(id);
    require_auth(itr->author);

    posts.erase(itr);
  }

  ACTION setuser(name user_contract_name){
    require_auth(_self);

    configtable new_config;
    new_config.user_contract = user_contract_name;

    config_table configs(_self, _self.value);
    configs.set(new_config, _self);
  }

private:
  TABLE posttable {
    uint64_t id;
    name author;
    string msg;
    bool flagged;
    auto primary_key() const { return id; }
  };  
  typedef multi_index<"post"_n, posttable> post_table;

  TABLE configtable {
    name user_contract;
  };
  typedef singleton<"config"_n, configtable> config_table;
  typedef multi_index<"config"_n, configtable> config_table_for_abi;
};