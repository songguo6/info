import React, { Component } from 'react';
import { Button } from 'antd';

var tp = require('tp-eosjs');

class CmdPage extends Component {

  state = { txId: '' }

  onBtnClick = () => {
    this.onClick('gamesforboys', 'EOS5DBwXHwmq9igQe39w6LRDHZmb7EjrALXAnATvxoeYLpHxWgPS7');
  }

  onBtnClick2 = () => {
    this.onClick('gm4tgojxgene', 'EOS4x3gwEmgf6k6nSyWmkwYGnrkMQ7jhwAaQ3ZLYk6wjGrViWFjtt');
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
        <Button onClick={this.onBtnClick2} className="mr mb">Run2</Button>
        <h3>{this.state.txId}</h3>
      </div>
    )
  }  
}

export default CmdPage;