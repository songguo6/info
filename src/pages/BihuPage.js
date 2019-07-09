import React, { Component } from 'react';
import { Row, Col, Tag, Table, Spin } from 'antd';

import moment from 'moment';
import { fetchAll } from '../eosio/api/fetch';

const tag = (text) => {
  let color = '#108ee9';
  switch(text){
    case '百咖说':
      color = 'green';
      break;
    case '项目分析':
      color = 'blue';
      break;
    case '行情解读':
      color = 'orange';
      break;
    case 'EOS':
      color = 'purple';
      break;
    default:
      break;
  }
  return <Tag color={color}>{text}</Tag>
}

const columns = [{ 
  title: '标题', 
  dataIndex: 'title', 
  key: 'title', 
  render: (text, record) => <a href={record.title_link} target='_blank' rel="noopener noreferrer">{text}</a>,
},{ 
  title: '作者', 
  dataIndex: 'author', 
  key: 'author', 
  width: 200,
  render: (text, record) => <a href={record.author_link} target='_blank' rel="noopener noreferrer">{text}</a>, 
  sorter: (a, b) => a.author - b.author,
},{ 
  title: '类型', 
  dataIndex: 'category', 
  key: 'category', 
  width: 200,
  render: (text) => tag(text),
  sorter: (a, b) => a.category - b.category, 
},{ 
  title: '发文时间', 
  dataIndex: 'time', 
  key: 'time', 
  width: 200,
  render: text => moment(parseInt(text)).format('YYYY-MM-DD HH:mm')
}];

class BihuPage extends Component {

  state = {data : [], loading: true}

  async componentDidMount(){
    const res = await fetchAll('posttable');
    let datas = [...res];
    datas.forEach(item => {
      item.key = item.id;
    });
    this.setState({data: datas, loading: false});
  }

  render(){
    return (
      <Row gutter={24}>
        <Col xl={19} lg={24} md={24} sm={24} xs={24}>
          <Spin tip='加载中...' spinning={this.state.loading}>
            <Table columns={columns} dataSource={this.state.data} />
          </Spin>
        </Col>
        <Col xl={5} lg={24} md={24} sm={24} xs={24}>
          <img width='100%' src='https://i.loli.net/2019/07/07/5d21fbf162be851763.jpg' alt='' />
        </Col>
      </Row>
    )
  }
}

export default BihuPage;