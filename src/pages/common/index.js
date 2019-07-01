import React from 'react';
import { Card, Avatar, Tag } from 'antd';

export const createItem = (item, index, width = '20%') => {
  return (
    <Card.Grid key={index} style={{ width }}>
      <Card bodyStyle={{ padding: 0 }} bordered={false}>
        <Card.Meta
          title={
            <span>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Avatar src={item.logo} />&nbsp;&nbsp;&nbsp;
                <span>{item.name}</span>&nbsp;&nbsp;&nbsp;
              </a>
              {item.reg ? <a href={item.reg} target="_blank" rel="noopener noreferrer">
                <Tag color='orange'>直达</Tag>
              </a> : ''}
            </span>
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
      title={<span style={{fontWeight: 'bold'}}>{title}</span>}
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

export const createSideCard = (title, data, width = '33.33%') => {
  return (
    <Card
      style={{ marginBottom: 24 }}
      title={<span style={{fontWeight: 'bold'}}>{title}</span>}
      bordered={false}
      bodyStyle={{ padding: 0 }}
    >
      {
        data.map((item, index) => (
          createItem(item, index, width)
        ))
      }
    </Card>
  )
}