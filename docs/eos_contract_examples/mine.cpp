#include <eosio/eosio.hpp>
#include <eosio/asset.hpp>
#include <eosio/transaction.hpp>

using namespace std;
using namespace eosio;

CONTRACT mine : public contract
{
public:
    using contract::contract;

    ACTION run()
    {
        require_auth(_self);
        
        for(uint8_t i=0; i<20; i++){
            action(permission_level{_self, "active"_n},
                "eosio.token"_n,
                "transfer"_n,
                std::make_tuple(_self, "eidosonecoin"_n, asset(1, symbol("EOS", 4)), std::string("")))
                .send();
        }

        transaction t;
        t.actions.emplace_back(permission_level{_self, "active"_n}, _self, "run"_n, std::make_tuple());
        t.delay_sec = 1;
        t.send(current_time_point().sec_since_epoch(), _self, false);    
    }
};
