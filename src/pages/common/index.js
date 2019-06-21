import React from 'react';
import { Card, Avatar, Icon } from 'antd';

export const createItem = (item, index, width = '20%') => {
  return (
    <Card.Grid key={index} style={{ width }}>
      <Card bodyStyle={{ padding: 0 }} bordered={false}>
        <Card.Meta
          title={
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Avatar src={item.logo} />&nbsp;&nbsp;&nbsp;
              {item.name}&nbsp;&nbsp;&nbsp;
              {item.star ? <Icon type='star' theme='twoTone' twoToneColor='orange' /> : ''}
            </a>
          }
        />
      </Card>
    </Card.Grid>
  )
}

export const createMainCard = (title, data, extra = '') => {
  return (
    <Card
      style={{ marginBottom: 24 }}
      bodyStyle={{ padding: 0 }}
      bordered={false}
      title={title}
      extra={extra}
    >
      {
        data.map((item, index) => (
          createItem(item, index)
        ))
      }
    </Card>
  )
}

export const createSideCard = (title, data) => {
  return (
    <Card
    style={{ marginBottom: 24 }}
    title={title}
    bordered={false}
    bodyStyle={{ padding: 0 }}
    >
      {
        data.map((item, index) => (
          createItem(item, index, '33.33%')
        ))
      }
    </Card>
  )
}