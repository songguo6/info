import React, { Component } from 'react';
import { Row, Button } from 'antd';

var tp = require('tp-eosjs');

const bs58 = require('bs58');

class CmdPage extends Component {

  state = { txId: '' }

  onBtnClick = () => {
    this.onClick('gamesforboys', 'EOS5DBwXHwmq9igQe39w6LRDHZmb7EjrALXAnATvxoeYLpHxWgPS7');
  }

  onBtnClick2 = () => {
    // this.onClick('gm4tgojxgene', 'EOS4x3gwEmgf6k6nSyWmkwYGnrkMQ7jhwAaQ3ZLYk6wjGrViWFjtt');

    const bytes = Buffer.from('80a3370527cf8b72e5833f5990531dda218c30adb73587ee2d5debd179ec22da8b0d1b6923', 'hex')
    const address = bs58.encode(bytes)
    console.log(address);
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
      <Row gutter={24}>
        <Button onClick={this.onBtnClick}>Run</Button>
        <Button onClick={this.onBtnClick2}>Run2</Button>
        <h5>{this.state.txId}</h5>
      </Row>
    )
  }
}

export default CmdPage;