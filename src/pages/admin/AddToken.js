import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { addtoken } from '../../eosio/api/service';

class AddToken extends Component {

  state = {
    name: '',
    url: '',
    logo: '',
  }

  onBtnClick = () => {
    const { name, url, logo} = this.state;
    addtoken(name, url, logo, (res) => {
      if(res.transaction_id){
        window.location.reload();
      }else if(res.message){
        console.log(res.message);
      }
    });
  }

  render(){
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    return (
      <Form {...formItemLayout}>
        <Form.Item label='Symbol'>
          <Input onChange={e => this.setState({name: e.target.value})}/>
        </Form.Item>
        <Form.Item label='Link'>
          <Input onChange={e => this.setState({url: e.target.value})}/>
        </Form.Item>
        <Form.Item label='Logo'>
          <Input onChange={e => this.setState({logo: e.target.value})}/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type='primary' onClick={this.onBtnClick}>
            提交
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default AddToken;