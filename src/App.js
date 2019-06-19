import React from 'react';

import { Layout, Menu, Icon } from 'antd';
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login, logout, checkLogin } from './eosio/api/login';
import { contract } from './eosio/api/config';

import LayoutHeader from './LayoutHeader';
import BtcPage from './pages/BtcPage';
import EosPage from './pages/EosPage';
import DappPage from './pages/DappPage';
import BihuPage from './pages/BihuPage';
import CandyPage from './pages/CandyPage';
import ExchangePage from './pages/dashboard/ExchangePage';
import FngPage from './pages/dashboard/FngPage';
import AddCandy from './pages/admin/AddCandy';

import './App.css';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {

  componentDidMount(){
    this.props.checkLogin();
  }

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  menuItem = (path, type, title) => {
    return (
      <Menu.Item key={path}>
        <Link to ={path}>{type ? <Icon type={type} /> : ''}<span>{title}</span></Link>
      </Menu.Item>  
    );
  }

  subMenuTitle = (type, title) => {
    return <span><Icon type={type}/><span>{title}</span></span>
  }

  render() {
    const { login, logout } = this.props;
    const accountName = this.props.account.name;
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" >
              <img src="/favicon.ico" alt=""/>
              {this.state.collapsed ? '' : <span>币圈信息站</span>}
            </div>
            <Menu 
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[this.props.location.pathname]} 
              defaultOpenKeys={['sub1']}>
              <SubMenu key="sub1" title={this.subMenuTitle('pie-chart', '信息总览')}>
                {this.menuItem('/', false, '交易所公告')}
                {this.menuItem('/fng', false, '恐惧贪婪指数')}
              </SubMenu>
              {this.menuItem('/btc', 'dollar', '比特币')}
              {this.menuItem('/eos', 'block', 'EOS')}
              {this.menuItem('/dapp', 'appstore', 'DAPP')}
              {this.menuItem('/bihu', 'bulb', '币乎好文')}
              {this.menuItem('/candy', 'heart', '糖果福利')}
              {accountName === contract ? 
              <SubMenu key="sub2" title={this.subMenuTitle('user', '管理员')}>
                {this.menuItem('/admin/addcandy', false, '添加糖果')}
              </SubMenu> : ''}
            </Menu>
          </Sider>
          <Layout>
            <LayoutHeader accountName={accountName} login={login} logout={logout} />      
            <Content style={{ margin: '0 16px' }}>
              <Route path='/' exact component={ExchangePage}></Route>
              <Route path='/fng' exact component={FngPage}></Route>
              <Route path='/btc' exact component={BtcPage}></Route>
              <Route path='/eos' exact component={EosPage}></Route>
              <Route path='/dapp' exact component={DappPage}></Route>
              <Route path='/bihu' exact component={BihuPage}></Route>
              <Route path='/candy' exact component={CandyPage}></Route>
              {accountName === contract ?
              <Route path='/admin/addcandy' exact component={AddCandy}></Route> : ''}
            </Content>
            <Footer style={{ textAlign: 'center' }}>币圈信息站 ©2018 Created by <a href='https://bihu.com/people/14150'>Songguo</a></Footer>
          </Layout>
        </Layout>
    );
  }
}

const mapState = (state) => {
  return {
    account: state.account,
  }
}

const mapDispatch = (dispatch) => {
  return { 
    login(){
      dispatch(login);  
    },
    logout(){
      dispatch(logout);  
    },
    checkLogin(){
      dispatch(checkLogin);
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(App));
