import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import axios from 'axios';
import moment from 'moment';

class SixtyPage extends Component {

  state = {data: []}

  componentDidMount(){
    axios.get('https://api-pub.bitfinex.com/v2/candles/trade:1D:tBTCUSD/hist?limit=5000&sort=1').then(res => {
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
      this.setState({data: chartData});
    }).catch(error => {
      console.log(error);
    });
  }

  render(){
    const data = this.state.data;
    const scale = {
      change: { alias: '累计涨幅'},
    };
    return (
      <div>
        <h1 style={{textAlign:"center"}}>比特币60日累计涨幅</h1>
        <Chart height={800} padding={[20, 45, 20, 45]} data={data} scale={scale} forceFit>
          <Tooltip />
          <Axis />
          <Geom type="area" position="date*change" color="#18a1cd" size={2} shape="smooth" />
        </Chart>
      </div>
    )
  }
}

export default SixtyPage;