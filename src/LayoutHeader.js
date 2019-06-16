import React, { Component } from 'react';
import { Layout, Button } from 'antd';

import axios from 'axios';

const { Header } = Layout;

class LayoutHeader extends Component {

  state = { datas: [] }

  componentDidMount(){
    this.requestData();
    setInterval(()=>{
      this.requestData();
    }, 10000);   
  }

  requestData(){
    axios.get('https://api.coincap.io/v2/assets?limit=10').then(res => {
      this.setState({datas: res.data.data})
    }).catch(function (error) {
      console.log(error);
    });
  } 

  createInfo(item, index){
    const change  = parseFloat(item.changePercent24Hr).toFixed(2);
    const price = parseFloat(item.priceUsd).toFixed(2);
    return (
      <span key={index} style={{marginRight: 20, fontWeight: 'bold'}}>
        <span>{item.symbol + ' $' + price + ' '}</span>
        <span style={{color: change >= 0 ? 'green' : 'red'}}>
          {(change >= 0 ? '+' : '') + change + '%'}
        </span>
      </span>
    )
  }

  render(){
    const { accountName, login, logout } = this.props;
    return (
      <Header style={{ background: '#fff', marginBottom: 16, padding: '0 20px' }} >
        <Button
          type='primary'
          className='login-btn'
          onClick={accountName ? logout: login }
        >
          {accountName ? '注销' : '登录'}
        </Button>
        {
          this.state.datas.map((item, index) => {
            return this.createInfo(item, index)
          })
        } 
      </Header>
    );
  }
}

export default LayoutHeader;