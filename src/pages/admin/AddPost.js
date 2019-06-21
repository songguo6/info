import React, { Component } from 'react';
import { Form, Button, Input, DatePicker } from 'antd';
import { addpost } from '../../eosio/api/service';

class AddCandy extends Component {

  state = {
    title: '',
    title_link: '',
    author: '',
    author_link: '',
    category: '',
    time: 0,
  }

  onBtnClick = () => {
    const { title, title_link, author, author_link, category, time } = this.state;
    addpost(title, title_link, author, author_link, category, time, (res) => {
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
        <Form.Item label='标题'>
          <Input onChange={e => this.setState({title: e.target.value})}/>
        </Form.Item>
        <Form.Item label='链接'>
          <Input onChange={e => this.setState({title_link: e.target.value})}/>
        </Form.Item>
        <Form.Item label='作者'>
          <Input onChange={e => this.setState({author: e.target.value})}/>
        </Form.Item>
        <Form.Item label='主页'>
          <Input onChange={e => this.setState({author_link: e.target.value})}/>
        </Form.Item>     
        <Form.Item label='类型'>
          <Input onChange={e => this.setState({category: e.target.value})}/>
        </Form.Item>  
        <Form.Item label='发文时间'>
          <DatePicker 
            showTime={{ format: 'HH:mm' }}
            placeholder='选择时间' 
            onChange={value => {if(value) this.setState({time: value.valueOf()})}} 
            onOk={value => {if(value) this.setState({time: value.valueOf()})}} 
          />
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

export default AddCandy;