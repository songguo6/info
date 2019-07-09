import React from 'react';
import moment from 'moment';
import { Modal } from 'antd';

export const getTodayZeroStamp = () => {
  const now = moment().format('YYYY-MM-DD');
  const zero = moment(now).format('YYYY-MM-DD HH:mm:ss');
  return moment(zero).toDate().getTime();
}

export const showCorsHelper = () => {
  Modal.warning({
    title: '浏览此页面需要安装CORS跨域插件',
    content: 
    <div style={{fontWeight: 'bold', lineHeight: '25px'}}>
      <div style={{margin: '25px 0 15px 0'}}>
        1.安装地址：<br/>      
        <a href='https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc' 
          target='_blank' rel='noopener noreferrer'
          style={{marginBottom: 10}}>
            Moesif Orign & CORS Changer
        </a>
      </div>
      <div style={{marginBottom: 15}} >
        2.安装好后，打开CORS跨域开关：<br/>
        <img src='https://i.loli.net/2019/07/09/5d24445a9732252207.png' alt=''/>
      </div>
      <div style={{marginBottom: 15}}>
        3.在不需要使用时，关闭CORS跨域开关。
      </div>
    </div>
  });
}