import React, { Component } from 'react';
import { Row, Button } from 'antd';

var tp = require('tp-eosjs');

class CmdPage extends Component {

  state = { txId: '' }

  onBtnClick = () => {
    if(tp.isConnected()){
      tp.pushEosAction({
        actions: [{
          account: 'gamesforboys',
          name: 'run',
          authorization: [{
            actor: 'gamesforboys',
            permission: 'active'
          }],
          data: {}
        }],
        address: 'EOS5DBwXHwmq9igQe39w6LRDHZmb7EjrALXAnATvxoeYLpHxWgPS7',
        account: 'gamesforboys',
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
        <h5>{this.state.txId}</h5>
      </Row>
    )
  }
}

export default CmdPage;