import React, { Component } from 'react';
import { Row, Button } from 'antd';

var tp = require('tp-eosjs');

class CmdPage extends Component {

  state = { txId: '' }

  onBtnClick = () => {
    if(tp.isConnected()){
      this.setState({txId: 'connect success'});
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