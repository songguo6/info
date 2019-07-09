import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, View } from 'bizcharts';
import { Spin } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { getTodayZeroStamp, showCorsHelper } from '../../utils';

const START_TIME = 1541692800000;

class FuturesPage extends Component {

  state = {data: [], loading: true}

  componentDidMount(){

    const size = (getTodayZeroStamp() - START_TIME) / 86400000 + 1;

    //现货
    axios.get('https://api.huobi.pro/market/history/kline?symbol=btcusdt&period=1day&size=' + size).then(res => {
      let chartData = [];  
      const nowData = [...res.data.data.reverse()];
      nowData.forEach(item => {
        chartData.push({
          date: moment(parseInt(item.id*1000)).format('YYYY-MM-DD'),
          price: item.close,
        })
      });

      //期货
      axios.get('https://api.hbdm.com/market/history/kline?period=1day&symbol=BTC_CQ&size=' + size).then(res => {
        res.data.data.forEach((item, index) => {
          chartData[index].pricef = item.close;
          chartData[index].change = parseFloat(parseFloat(item.close - chartData[index].price).toFixed(2));
        });
        this.setState({data: chartData, loading: false});
      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      showCorsHelper();
    });
  }

  render(){
    const data = this.state.data;
    const scale = {
      price: { alias: '现货价' },
      pricef: { alias: '期货价'},
      change: { alias: '价格差值'},
    };
    return (
      <div>
        <h1 style={{textAlign:"center"}}>BTC季度合约价格和现货价格的关系</h1>
        <Spin tip='图表加载中...' spinning={this.state.loading}>
          <Chart height={800} padding={[20, 45, 20, 45]} data={data} scale={scale} forceFit>
            <Tooltip />
            <View end={{x: 1, y: 0.5}} data = {data}>
              <Axis />
              <Geom type="area" position="date*change" color="#18a1cd" size={2.5} shape="smooth" />
            </View>
            <View start={{ x: 0, y: 0.55}} data={data}>
              <Axis />
              <Geom type="line" position="date*price" color="#fdae6b" size={2.5} shape="smooth" />
              <Geom type="line" position="date*pricef" color="#18a1cd" size={2.5} shape="smooth" />
            </View>
          </Chart>
        </Spin>
      </div>
    )
  }
}

export default FuturesPage;