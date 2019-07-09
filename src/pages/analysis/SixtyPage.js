import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import { Radio, Spin } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { showCorsHelper } from '../../utils';

class SixtyPage extends Component {

  state = {data: [], loading: true, symbol: 'BTC'}

  componentDidMount(){
    this.requestData('BTC');
  }

  requestData(symbol){
    axios.get('https://api-pub.bitfinex.com/v2/candles/trade:1D:t' + symbol + 'USD/hist?limit=5000&sort=1').then(res => {
      let rawData = [];
      res.data.forEach(item => {
        rawData.push({
          date: moment(parseInt(item[0])).format('YYYY-MM-DD'),
          change: (item[2] - item[1]) / item[1],
        })
      });
      let chartData = [];
      rawData.forEach((item, index) => {
        if(index > 58){
          let change60 = 0;
          for(let i = 0; i < 60; i++){
            change60 += rawData[index - i].change;
          }
          chartData.push({
            date: item.date,
            change: parseFloat(change60.toFixed(2)),    
          })
        }
      });
      this.setState({data: chartData, loading: false, symbol});
    }).catch(error => {
      showCorsHelper();
    });
  }

  render(){
    const data = this.state.data;
    const scale = {
      change: { alias: '累计涨幅'},
    };
    return (
      <div>
        <h1 style={{textAlign:'center'}}>{this.state.symbol}&nbsp;60日累计涨幅</h1>
        <Radio.Group defaultValue='BTC' onChange={e => {
          this.setState({loading: true});
          this.requestData(e.target.value);
        }}>
          <Radio.Button value='BTC'>BTC</Radio.Button>
          <Radio.Button value='ETH'>ETH</Radio.Button>
          <Radio.Button value='XRP'>XRP</Radio.Button>
          <Radio.Button value='LTC'>LTC</Radio.Button>
          <Radio.Button value='BCH'>BCH</Radio.Button>
          <Radio.Button value='EOS'>EOS</Radio.Button>
          <Radio.Button value='TRX'>TRX</Radio.Button>
        </Radio.Group>
        <Spin tip='图表加载中...' spinning={this.state.loading}>
          <Chart height={800} padding={[20, 45, 20, 45]} data={data} scale={scale} forceFit>
            <Tooltip />
            <Axis />
            <Geom type="area" position="date*change" color="#18a1cd" size={2} shape="smooth" />
          </Chart>
        </Spin>
      </div>
    )
  }
}

export default SixtyPage;