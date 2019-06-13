
#include <eosio/eosio.hpp>

using namespace eosio;

CONTRACT coincoininfo : public eosio::contract {
  public:
    using contract::contract;

    ACTION addcandy(uint32_t type, std::string title, std::string link, 
      std::string info, uint64_t start_time, uint64_t end_time){
      require_auth(_self);
    
      candy_t candies(_self, _self.value);
      candies.emplace(_self, [&](auto& row){
        row.id = candies.available_primary_key();
        row.type = type;
        row.title = title;  
        row.link = link;          
        row.info = info;  
        row.start_time = start_time;  
        row.end_time = end_time;  
      });
    } 

  private:
    TABLE candytable {
      uint64_t id;
      uint64_t type;  //1=空投 2=交易所活动 3=平台注册 4=APP挖矿 5=其他 
      std::string title;
      std::string link;
      std::string info;
      uint64_t start_time;
      uint64_t end_time;

      uint64_t primary_key() const { return id; }
      uint64_t get_secondary() const { return type; }
    };

    typedef multi_index<"candytable"_n, candytable,
      indexed_by<"bytype"_n, const_mem_fun<candytable, uint64_t, &candytable::get_secondary>>
    > candy_t;
};