import React, { Component } from 'react';
import { Table, Tag, Spin } from 'antd';

import moment from 'moment';
import { fetchAll } from '../eosio/api/fetch';

const typeToText = (type) => {
  let text = '';
  switch(type){
    case 1:
      text = '空投';
      break;
    case 2:
      text = '交易所活动';
      break;  
    case 3:
      text = '平台注册';
      break;
    case 4:
      text = 'APP挖矿';
      break;
    case 5:
      text = '其他';
      break;      
    default:
      break;  
  }
  return text;
}

const tag = (record) => {
  const now = new Date().getTime();
  if(now < record.start_time){
    return <Tag color='blue'>未开始</Tag>
  }else if(now >= record.start_time && now < record.end_time){
    return <Tag color='green'>进行中</Tag>
  }else if(now >= record.end_time){
    return <Tag color='red'>已结束</Tag>
  }
  return '';
}

const status = (record) => {
  const now = new Date().getTime();
  if(now < record.start_time){
    return 0;
  }else if(now >= record.start_time && now < record.end_time){
    return 1;
  }else if(now >= record.end_time){
    return 2;
  }
  return 0;  
}

const columns = [
  { title: '状态', dataIndex: 'id', key: 'id', render: (text, record) => tag(record), sorter: (a, b) => status(a) - status(b), defaultSortOrder: 'ascend'},
  { title: '类型', dataIndex: 'type', key: 'type', width: 105, render: text => typeToText(text), sorter: (a, b) => a.type - b.type},
  { title: '标题', dataIndex: 'title', key: 'titile', render: (text, record) => <a href={record.link} target='_blank' rel="noopener noreferrer">{text}</a>},
  { title: '详情', dataIndex: 'info', key: 'info', width: 750 },
  { title: '价值', dataIndex: 'reward', key: 'reward'},
  { title: '开始时间', dataIndex: 'start_time', key: 'start_time', render: text => moment(parseInt(text)).format('YYYY-MM-DD HH:mm')},
  { title: '结束时间', dataIndex: 'end_time', key: 'end_time', render: text => moment(parseInt(text)).format('YYYY-MM-DD HH:mm')},
];

class CandyPage extends Component {

  state = {data : [], loading: true}

  async componentDidMount(){
    const res = await fetchAll('candytable');
    let datas = [...res];
    datas.forEach(item => {
      item.key = item.id;
    });
    this.setState({data: datas, loading: false});
  }

  render(){
    return(
      <Spin tip='加载中...' spinning={this.state.loading}>
        <Table columns={columns} dataSource={this.state.data} />
      </Spin>
    ) 
  }
}

export default CandyPage;