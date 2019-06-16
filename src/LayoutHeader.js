import React, { Component } from 'react';
import Malarquee from 'react-malarquee';
import { Layout, Button } from 'antd';
import axios from 'axios';

const { Header } = Layout;

const cmcApiKey = '7f6b2e3f-b76f-434a-877f-6ea3e9e16f33';

class LayoutHeader extends Component {

  state = { info: '币圈信息站' }

  componentDidMount(){
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
      + '?start=1&limit=5000&convert=USD'
      + '&CMC_PRO_API_KEY=' + cmcApiKey
    ).then(res => {
      console.log(res);    
    }).catch(function (error) {
      console.log(error);
    });
  }

  render(){
    const { accountName, login, logout } = this.props;
    return (
      <Header style={{ background: '#fff', marginBottom: 16, padding: '0 20px' }} >
        <Malarquee style={{marginRight:100}} hoverToPause={true}>
          <span style={{color:'red', marginRight:10}}>{this.state.info}</span>
        </Malarquee>
        <Button
          type='primary'
          className='login-btn'
          onClick={accountName ? logout: login }
        >
          {accountName ? '注销' : '登录'}
        </Button>
      </Header>
    );
  }
}

export default LayoutHeader;