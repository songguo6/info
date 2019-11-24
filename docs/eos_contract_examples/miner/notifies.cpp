#include <eosio/eosio.hpp>
#include <eosio/asset.hpp>
#include <eosio/transaction.hpp>

using namespace std;
using namespace eosio;

CONTRACT notifies : public contract
{
public:
    using contract::contract;

    ACTION run()
    {   

    }

    [[eosio::on_notify("eosio.token::transfer")]]
    void claim(name from, name to, eosio::asset quantity, std::string memo)
    {
        if (to != _self || from != "eosio.names"_n) 
            return;

        for(uint8_t i=0; i<140; i++){
            action(permission_level{_self, "active"_n},
                "eosio.token"_n,
                "transfer"_n,
                std::make_tuple(_self, "eidosonecoin"_n, asset(1, symbol("EOS", 4)), std::string(""))
            ).send();    
        }
    }
};
