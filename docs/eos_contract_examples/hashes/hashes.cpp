#include <eosio/eosio.hpp>
#include <eosio/crypto.hpp>
#include <string>

using namespace eosio;
using std::string;

CONTRACT hashes : public contract {

public:   
  using contract::contract;

  ACTION hash(const string &str){
    checksum256 hashed = sha256(str.c_str(), str.length());
    string result = to_hex(hashed);
    print(result);
  }

private:
  static string to_hex(const checksum256 &hashed){
    string result;
    const char *hex_chars = "0123456789abcdef";
    const auto bytes = hashed.extract_as_byte_array();
    for(uint32_t i=0; i<bytes.size(); ++i){
      (result += hex_chars[(bytes.at(i) >> 4)]) += hex_chars[(bytes.at(i) & 0x0f)];
    }
    return result;
  }
};