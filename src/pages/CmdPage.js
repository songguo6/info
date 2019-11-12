import React, { Component } from 'react';
import { Button, Input } from 'antd';

var tp = require('tp-eosjs');

const bs58 = '80a3370527cf8b72e5833f5990531dda218c30adb73587ee2d5debd179ec22da8b0a3f8a2d';
const bs58ck = 'a3370527cf8b72e5833f5990531dda218c30adb73587ee2d5debd179ec22da8b';

class CmdPage extends Component {

  state = { 
    txId: '',
    inputOri: bs58,
    bs58encode: '',
    inputPrv: bs58ck,
    wifPrv: '',
  }

  onBtnClick = () => {
    this.onClick('gamesforboys', 'EOS5DBwXHwmq9igQe39w6LRDHZmb7EjrALXAnATvxoeYLpHxWgPS7');
  }

  onClick = (account, address) => {
    if(tp.isConnected()){
      tp.pushEosAction({
        actions: [{
          account,
          name: 'run',
          authorization: [{
            actor: account,
            permission: 'active'
          }],
          data: {}
        }],
        address,
        account,
      }).then(res =>{
        this.setState({txId: res.data.transactionId});
      });
    }else{
      this.setState({txId: 'connect failed'});
    }
  }
  
  render(){
    return (
      <div style={{padding: 20}}>
        <Button onClick={this.onBtnClick} className="mr mb">Run</Button>
        <h3>{this.state.txId}</h3>
        <br/>
        <Input onChange={e => this.setState({inputOri: e.target.value})} value={this.state.inputOri}/>
        <Button onClick={this.onBase58Click} className="ml">base58</Button>
        <br/><br/>
        <h3>{this.state.bs58encode}</h3>
        <br/>
        <Input onChange={e => this.setState({inputPrv: e.target.value})} value={this.state.inputPrv}/>
        <Button onClick={this.onBase58CheckClick} className="ml">base58check（WIF）</Button>
        <br/><br/>
        <h3>{this.state.wifPrv}</h3>
      </div>
    )
  }

  onBase58Click = () => {
    const bs58 = require('bs58');
    const bytes = Buffer.from(this.state.inputOri, 'hex');
    this.setState({bs58encode: bs58.encode(bytes)});
  }
  
  onBase58CheckClick = () => {
    const base58check = require('base58check');
    const wif = base58check.encode(this.state.inputPrv, '80', 'hex');
    this.setState({wifPrv: wif});
  }
}

export default CmdPage;