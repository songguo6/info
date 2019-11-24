#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
#include <string>

using namespace eosio;
using std::string;

CONTRACT singletons : public contract {
public:
  using contract::contract;

  singletons(name self, name first_receiver, datastream<const char*> ds) : contract(self, first_receiver, ds),
    config(_self, _self.value){}

  ACTION init(){
    configtable default_config;
    config.get_or_create(_self, default_config);
  }   

  ACTION setclosed(bool is_closed){
    auto state = config.get();
    state.closed = is_closed;
    config.set(state, _self);
  }

  ACTION getclosed(){
    auto state = config.get();
    print(state.closed);
  }

  ACTION setcount(uint32_t count){
    auto state = config.get();
    state.count = count;
    config.set(state, _self);
  }

  ACTION getcount(){
    auto state = config.get();
    print(state.count);
  }

private:
  TABLE configtable {
    bool closed = false;
    uint32_t count = 144;
  };

  typedef eosio::singleton<"config"_n, configtable> config_table;
  typedef eosio::multi_index<"config"_n, configtable> config_table_for_abi;
  config_table config;
};