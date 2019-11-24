#include <eosio/eosio.hpp>
#include <string>

using namespace eosio;
using std::string;

CONTRACT user : public contract {
public:
  using contract::contract;

  ACTION create(const name username){
    profile_table profiles(_self, _self.value);
    auto itr = profiles.find(username.value);
    check(itr == profiles.end(), "User already registered");

    profiles.emplace(_self, [&](auto &profile){
      profile.username = username;
    });
  } 

  ACTION validate(const name username){
    profile_table profiles(_self, _self.value);
    auto itr = profiles.find(username.value);
    check(!itr->flagged, "User is flagged");
    check(itr->approved, "User has not been approved");
  }
  using validate_action = action_wrapper<"validate"_n, &user::validate>; 

  ACTION approve(const name username, bool is_approved){
    require_auth(_self);

    profile_table profiles(_self, _self.value);
    auto itr = profiles.find(username.value);
    profiles.modify(itr, _self, [&](auto &profile){
      profile.approved = is_approved;
    });
  }

  ACTION flag(const name username, bool is_flagged){
    require_auth(_self);

    profile_table profiles(_self, _self.value);
    auto itr = profiles.find(username.value);
    profiles.modify(itr, _self, [&](auto &profile){
      profile.flagged = is_flagged;
    });
  }

  TABLE profiletable {
    name username;
    bool approved = false;
    bool flagged = false;

    auto primary_key() const { return username.value; }
  };

  typedef multi_index<"profile"_n, profiletable> profile_table;
};