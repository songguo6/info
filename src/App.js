import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >
            <img src="favicon.ico" alt=""/>
            {this.state.collapsed ? '' : <span>币圈信息站</span>}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>信息总览</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="dollar" />
                  <span>比特币</span>
                </span>
              }
            >
              <Menu.Item key="3">栏目1</Menu.Item>
              <Menu.Item key="4">栏目2</Menu.Item>
              <Menu.Item key="5">栏目3</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="block" />
                  <span>EOS</span>
                </span>
              }
            >
              <Menu.Item key="6">栏目1</Menu.Item>
              <Menu.Item key="7">栏目2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>DAPP</span>
                </span>
              }
            >
              <Menu.Item key="8">栏目1</Menu.Item>
              <Menu.Item key="9">栏目2</Menu.Item>
            </SubMenu>
            <Menu.Item key="10">
              <Icon type="bulb" />
              <span>币乎好文</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', marginBottom: 16 }} >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Hello Blockchain!</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>币圈信息站 ©2018 Created by Songguo</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
