import React from 'react';
import { Row, Col, Card, Icon, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const QRCode = require('qrcode.react');

const createItem = (title, text) => (
  <Card style={{textAlign: 'center', paddingTop: 40}}>
    <p style={{fontSize: 20, fontWeight: 'bold'}}>{title}</p>  
    <QRCode value={text} />
    <CopyToClipboard text={text} onCopy={() => {message.success('已复制')}}>
      <p style={{color: '#1da1f2', fontSize: 20, marginTop: 20, wordWrap:'break-word'}}>
        {text}&nbsp;<Icon type='copy'/>
      </p>
    </CopyToClipboard>            
  </Card>
)

const SupportPopover = () => (
  <Row gutter={24}>
    <Col xl={8} lg={24} md={24} sm={24} xs={24}>
      {createItem('BTC', '17yHqWhAVDyJkxuG7C7DwpFGWcoyyNU4Nu')}
    </Col>
    <Col xl={8} lg={24} md={24} sm={24} xs={24}>
      {createItem('ETH / ERC20', '0x93851d69700F75ae3568503b30DDF70E1Df88e20')}
    </Col>
    <Col xl={8} lg={24} md={24} sm={24} xs={24}>
      {createItem('EOS / KEY', 'songguo55555')}
    </Col>
  </Row>
)

export default SupportPopover;