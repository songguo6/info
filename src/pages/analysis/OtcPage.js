import React, { Component } from 'react';
import { Row, Col, Card, Avatar, Spin } from 'antd';
import axios from 'axios';
import { showCorsHelper } from '../../utils';

const BTC = '1';
const USDT = '2';
const ETH = '3';
const EOS = '5';

const RATE_URL = 'https://query1.finance.yahoo.com/v8/finance/chart/CNY=X?region=US&lang=en-US&includePrePost=false&interval=1h&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance';

class OtcPage extends Component {

  state = {
    btcPriceOtc : '',
    ethPriceOtc : '',
    eosPriceOtc : '',
    usdtPriceOtc : '',
    btcPrice: '',
    ethPrice: '',
    eosPrice: '',
    usdPrice: '',
    loading: true,
    showing: false,
  }

  getCoin = (coinId) => {
    if(coinId === BTC){
      return 'BTC';
    }else if(coinId === ETH){
      return 'ETH';
    }else if(coinId === EOS){
      return 'EOS';
    }else if(coinId === USDT){
      return 'USDT';
    }
    return '';
  }

  getAvatar = (coinId) => {
    if(coinId === BTC){
      return 'https://s1.bqiapp.com/coin/20181030_72_png/bitcoin_200_200.png?v=1561015933';
    }else if(coinId === ETH){
      return 'https://s1.bqiapp.com/coin/20181030_72_png/ethereum_200_200.png?v=1561100400';
    }else if(coinId === EOS){
      return 'https://s1.bqiapp.com/coin/20181030_72_png/eos_200_200.png?v=1561110030';
    }else if(coinId === USDT){
      return 'https://s1.bqiapp.com/coin/20181030_72_png/tether_200_200.png?v=1562634583';
    }
    return '';
  }

  setPrice = (coinId, priceOtc, price) => {
    if(coinId === BTC){
      this.setState({btcPriceOtc: priceOtc, btcPrice: price});
    }else if(coinId === ETH){
      this.setState({ethPriceOtc: priceOtc, ethPrice: price});
    }else if(coinId === EOS){
      this.setState({eosPriceOtc: priceOtc, eosPrice: price});
    }else if(coinId === USDT){
      this.setState({usdtPriceOtc: priceOtc, usdPrice: price});
    }
  }

  requestDataInner = (coinId) => {
    const { usdPrice } = this.state;
    axios.get('https://otc-api.eiijo.cn/v1/data/trade-market?coinId=' + coinId
      + '&currency=1&tradeType=buy&currPage=1&country=37&blockType=general&online=1').then(res => {

      const priceOtc = res.data.data[0].price;  
    
      if(coinId === USDT){
        this.setPrice(coinId, priceOtc, usdPrice);
      }else{
        axios.get('https://api.binance.com/api/v3/ticker/price?symbol=' + this.getCoin(coinId) + 'USDT').then(res => {
          this.setPrice(coinId, priceOtc, parseFloat(res.data.price*usdPrice).toFixed(2));
          this.setState({loading: false});
        }).catch(error => {
          console.log(error);
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }

  requestData = () => {
    axios.get(RATE_URL).then(res => {
      this.setState({usdPrice: res.data.chart.result[0].meta.previousClose});
      this.requestDataInner(BTC);
      this.requestDataInner(ETH);
      this.requestDataInner(EOS);
      this.requestDataInner(USDT);
    }).catch(error => {
      if(!this.state.showing){
        showCorsHelper();
      }
      this.setState({showing: true});
    });
  }

  componentDidMount() {
    this.requestData();
    setInterval(() => {
      this.requestData();
    }, 10000);
  }

  premiumRate = (price, priceOtc) => {
    if(!price) return '';
    const rate = parseFloat((priceOtc - price) / price * 100).toFixed(2);
    return (
      <span style={{color: rate >= 0 ? 'green' : 'red', fontWeight: 'bold'}}>
        {rate >= 0 ? '+' : ''}{rate}%
      </span>
    )
  }

  createCard = (coinId, priceOtc, price) => (
    <Col xl={6} lg={24} md={24} sm={24} xs={24}>
      <Spin tip='加载中...' spinning={this.state.loading}>
        <Card bodyStyle={{ padding: 20 }} bordered={false}>
          <Card.Meta 
            title={
              <div style={{fontSize: 20, marginBottom: 20, fontWeight: 'bold'}}>
                <Avatar src={this.getAvatar(coinId)} />&nbsp;&nbsp;&nbsp;{this.getCoin(coinId)}
              </div>
            }
          />
          <div style={{lineHeight:'30px', fontSize: '17px'}}>场内价格：¥{price}</div>
          <div style={{lineHeight:'30px', fontSize: '17px'}}>场外价格：¥{priceOtc}</div>
          <div style={{lineHeight:'30px', fontSize: '17px'}}>溢价率：{this.premiumRate(price, priceOtc)}</div>
        </Card>
      </Spin>
    </Col>
  ) 

  render() {
    return (
      <div>
        <Row gutter={24}>
          {this.createCard(BTC, this.state.btcPriceOtc, this.state.btcPrice)}
          {this.createCard(ETH, this.state.ethPriceOtc, this.state.ethPrice)}
          {this.createCard(EOS, this.state.eosPriceOtc, this.state.eosPrice)}
          {this.createCard(USDT, this.state.usdtPriceOtc, this.state.usdPrice)}
        </Row>
        <h4 style={{marginTop: 30}}>* 场内交易数据来自币安（binance）交易所</h4>
        <h4>* 场外交易数据来自火币（huobi）OTC交易所</h4>
      </div>
    )
  }
}

export default OtcPage;