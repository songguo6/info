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