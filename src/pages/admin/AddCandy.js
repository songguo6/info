import React, { Component } from 'react';

import { Form, Button, Input, Radio, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

class AddCandy extends Component {

  state = {
    title: '',
    link: '',
    info: '',
    type: 1,
    start_time: 0,
    end_time: 0,
  }

  onBtnClick = () => {
    console.log(this.state);
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
          <Input onChange={e => this.setState({link: e.target.value})}/>
        </Form.Item>
        <Form.Item label='类型'>
          <Radio.Group defaultValue={1} onChange={e => {this.setState({type: e.target.value})}}>
            <Radio.Button value={1}>空投</Radio.Button>
            <Radio.Button value={2}>交易所活动</Radio.Button>
            <Radio.Button value={3}>平台注册</Radio.Button>
            <Radio.Button value={4}>APP挖矿</Radio.Button>
            <Radio.Button value={5}>其他</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='详情'>
          <Input.TextArea
            autosize={{ minRows: 5, maxRows: 10 }}
            onChange={e => this.setState({info: e.target.value})}
          />
        </Form.Item>       
        <Form.Item label='开始/结束时间'>
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            placeholder={['开始时间', '结束时间']}
            onChange={value => {
              this.setState({
                start_time: value[0].valueOf(),
                end_time: value[1].valueOf()
              });
            }}
            onOk={value => {
              this.setState({
                start_time: value[0].valueOf(),
                end_time: value[1].valueOf()
              });
            }}
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