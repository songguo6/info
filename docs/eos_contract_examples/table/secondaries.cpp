#include <eosio/eosio.hpp>
#include <string>

using namespace eosio;
using std::string;

CONTRACT secondaries : public contract {
public:
  using contract::contract;

  ACTION post(const name account, const string &msg){
    require_auth(account);
    post_table posts(_self, _self.value);
    posts.emplace(account, [&](auto &post){
      post.id = posts.available_primary_key();
      post.author = account;
      post.msg = msg;
    });
  }

  ACTION get(uint64_t id){
    post_table posts(_self, _self.value);
    auto post = posts.get(id);
    print(post.msg);
  }

  ACTION get2(const name account){
    post_table posts(_self, _self.value);
    auto author_index = posts.get_index<"byauthor"_n>();
    auto itr = author_index.find(account.value);
    while(itr != author_index.end()){
      if(itr->author == account){
        print(itr->msg, " | ");
      }
      itr++;
    }
  }

private:
  TABLE posttable {
    uint64_t id;
    name author;
    string msg;

    auto primary_key() const { return id; }
    uint64_t get_author() const { return author.value; } 
  };

  typedef multi_index<"post"_n, posttable, 
    indexed_by<"byauthor"_n, const_mem_fun<posttable, uint64_t, &posttable::get_author>>
  > post_table;    
};