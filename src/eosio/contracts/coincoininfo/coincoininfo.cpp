
#include <eosio/eosio.hpp>
#include <eosio/symbol.hpp>

using namespace eosio;

CONTRACT coincoininfo : public eosio::contract {
  public:
    using contract::contract;

    ACTION addcandy(uint64_t type, std::string title, std::string link, 
      std::string info, std::string reward, uint64_t start_time, uint64_t end_time){
      require_auth(_self);
    
      candy_t candies(_self, _self.value);
      candies.emplace(_self, [&](auto& row){
        row.id = candies.available_primary_key();
        row.type = type;
        row.title = title;  
        row.link = link;          
        row.info = info;  
        row.reward = reward;
        row.start_time = start_time;  
        row.end_time = end_time;  
      });
    } 

    ACTION delcandy(uint64_t id){
      require_auth(_self);
      candy_t candies(_self, _self.value);
      auto itr = candies.find(id);
      candies.erase(itr);
    }

    ACTION addpost(std::string title, std::string title_link, std::string author, 
      std::string author_link, std::string category, uint64_t time){
      require_auth(_self);  

      post_t posts(_self, _self.value);
      posts.emplace(_self, [&](auto& row){
        row.id = posts.available_primary_key();
        row.title = title;
        row.title_link = title_link;
        row.author = author;
        row.author_link = author_link;
        row.category = category;
        row.time = time;
      });
    }

    ACTION delpost(uint64_t id){
      require_auth(_self);
      post_t posts(_self, _self.value);
      auto itr = posts.find(id);
      posts.erase(itr);
    }

    ACTION addtoken(std::string name, std::string url, std::string logo){
      require_auth(_self);
      token_t tokens(_self, _self.value);
      tokens.emplace(_self, [&](auto& row){
        row.id = tokens.available_primary_key();
        row.name = name;
        row.url = url;
        row.logo = logo;
      });
    }

    ACTION deltoken(uint64_t id){
      require_auth(_self);
      token_t tokens(_self, _self.value);
      auto itr = tokens.find(id);
      tokens.erase(itr);
    }

  private:
    TABLE candytable {
      uint64_t id;
      uint64_t type;  //1=空投 2=交易所活动 3=平台注册 4=APP挖矿 5=其他 
      std::string title;
      std::string link;
      std::string info;
      std::string reward;
      uint64_t start_time;
      uint64_t end_time;

      uint64_t primary_key() const { return id; }
      uint64_t get_secondary() const { return type; }
    };

    typedef multi_index<"candytable"_n, candytable,
      indexed_by<"bytype"_n, const_mem_fun<candytable, uint64_t, &candytable::get_secondary>>
    > candy_t;

    TABLE posttable {
      uint64_t id;
      std::string title;
      std::string title_link;
      std::string author;
      std::string author_link;
      std::string category;
      uint64_t time;

      uint64_t primary_key() const { return id; }
    };

    typedef multi_index<"posttable"_n, posttable> post_t;

    TABLE tokentable {
      uint64_t id; 
      std::string name;
      std::string url;
      std::string logo;

      uint64_t primary_key() const { return id; }
    };

    typedef multi_index<"tokentable"_n, tokentable> token_t;
};