import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, View } from 'bizcharts';
import { Spin } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { getTodayZeroStamp, showCorsHelper } from '../../utils';

const START_TIME = 1546272000000;

const STATIC_DATA = [
  {date: '2018-11-10', price: 6454.61, pricef: 6403.25, change: 0},
  {date: '2018-11-11', price: 6380.48, pricef: 6348.45, change: 0},
  {date: '2018-11-12', price: 6450.76, pricef: 6400.23, change: 0},
  {date: '2018-11-13', price: 6459.96, pricef: 6340.65, change: 0},
  {date: '2018-11-14', price: 6232.28, pricef: 6069.08, change: 0},
  {date: '2018-11-15', price: 5675.81, pricef: 5462.54, change: 0},
  {date: '2018-11-16', price: 5647.69, pricef: 5491.59, change: 0},
  {date: '2018-11-17', price: 5601.30, pricef: 5424.38, change: 0},
  {date: '2018-11-18', price: 5641.68, pricef: 5510.76, change: 0},
  {date: '2018-11-19', price: 5216.93, pricef: 5064.39, change: 0},
  {date: '2018-11-20', price: 4950.00, pricef: 4766.00, change: 0},
  {date: '2018-11-21', price: 4632.51, pricef: 4493.26, change: 0},
  {date: '2018-11-22', price: 4559.57, pricef: 4444.66, change: 0},
  {date: '2018-11-23', price: 4404.11, pricef: 4262.56, change: 0},
  {date: '2018-11-24', price: 4372.49, pricef: 4254.98, change: 0},
  {date: '2018-11-25', price: 3882.06, pricef: 3749.96, change: 0},
  {date: '2018-11-26', price: 3835.00, pricef: 3703.00, change: 0},
  {date: '2018-11-27', price: 3781.45, pricef: 3671.00, change: 0},
  {date: '2018-11-28', price: 4248.25, pricef: 4198.00, change: 0},
  {date: '2018-11-29', price: 4270.60, pricef: 4236.65, change: 0},
  {date: '2018-11-30', price: 4028.30, pricef: 3951.53, change: 0},
  {date: '2018-12-01', price: 4219.35, pricef: 4144.99, change: 0},
  {date: '2018-12-02', price: 4176.45, pricef: 4093.95, change: 0},
  {date: '2018-12-03', price: 3880.00, pricef: 3795.14, change: 0},
  {date: '2018-12-04', price: 4023.02, pricef: 3932.57, change: 0},
  {date: '2018-12-05', price: 3878.40, pricef: 3795.17, change: 0},
  {date: '2018-12-06', price: 3695.53, pricef: 3562.00, change: 0},
  {date: '2018-12-07', price: 3315.50, pricef: 3233.84, change: 0},
  {date: '2018-12-08', price: 3361.86, pricef: 3317.65, change: 0},
  {date: '2018-12-09', price: 3575.20, pricef: 3530.00, change: 0},
  {date: '2018-12-10', price: 3430.28, pricef: 3398.84, change: 0},
  {date: '2018-12-11', price: 3351.67, pricef: 3300.00, change: 0},
  {date: '2018-12-12', price: 3458.10, pricef: 3438.55, change: 0},
  {date: '2018-12-13', price: 3415.90, pricef: 3379.32, change: 0},
  {date: '2018-12-14', price: 3260.54, pricef: 3169.11, change: 0},
  {date: '2018-12-15', price: 3172.10, pricef: 3075.01, change: 0},
  {date: '2018-12-16', price: 3244.31, pricef: 3167.19, change: 0},
  {date: '2018-12-17', price: 3420.35, pricef: 3343.99, change: 0},
  {date: '2018-12-18', price: 3512.00, pricef: 3443.88, change: 0},
  {date: '2018-12-19', price: 3749.21, pricef: 3669.00, change: 0},
  {date: '2018-12-20', price: 3987.98, pricef: 3904.10, change: 0},
  {date: '2018-12-21', price: 3946.27, pricef: 3862.15, change: 0},
  {date: '2018-12-22', price: 3829.00, pricef: 3731.00, change: 0},
  {date: '2018-12-23', price: 3909.03, pricef: 3834.22, change: 0},
  {date: '2018-12-24', price: 4024.78, pricef: 3934.11, change: 0},
  {date: '2018-12-25', price: 3687.85, pricef: 3628.45, change: 0},
  {date: '2018-12-26', price: 3708.15, pricef: 3645.78, change: 0},
  {date: '2018-12-27', price: 3718.93, pricef: 3650.14, change: 0},
  {date: '2018-12-28', price: 3781.00, pricef: 3728.30, change: 0},
  {date: '2018-12-29', price: 3822.97, pricef: 3747.44, change: 0},
  {date: '2018-12-30', price: 3768.66, pricef: 3687.68, change: 0},
  {date: '2018-12-31', price: 3754.47, pricef: 3678.60, change: 0},
];

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

    STATIC_DATA.forEach(item => {
      item.change = parseFloat(item.pricef - item.price).toFixed(2);
    });
    const data = [...STATIC_DATA, ...this.state.data];
    console.log(data);
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