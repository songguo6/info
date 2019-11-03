import React, { Component } from 'react';
import { Row, Button } from 'antd';

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
      <Row gutter={24}>
        <Button onClick={this.onBtnClick}>Run</Button>
        <Button onClick={this.onBtnClick2}>Run2</Button>
        <h5>{this.state.txId}</h5>
      </Row>
    )
  }
}

export default CmdPage;