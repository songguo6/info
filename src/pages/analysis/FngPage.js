import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import moment from 'moment';
import axios from 'axios';
import { showCorsHelper } from '../../utils';

class FngPage extends Component {

  state = {data: []}

  componentDidMount(){
    axios.get('https://api.alternative.me/fng/?limit=666').then(res => {
      let chartData = [];
      const rawData = [...res.data.data];
      rawData.forEach(item => {
        chartData.push({
          date: moment(parseInt(item.timestamp*1000)).format('YYYY-MM-DD'),
          value: parseInt(item.value),
        });
      });

      axios.get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=1517443200000&end='+moment()).then(res => {
        let newData = [...chartData];
        chartData.forEach((itemChart, index) => {
          res.data.data.forEach(item => {
            if(itemChart.date === item.date.substring(0, 10)){
              newData[index].price = parseInt(item.priceUsd);
            }
          })
        })
        this.setState({data: newData});
      }).catch(error => {
        console.log(error);
      })
    }).catch(error => {
      showCorsHelper();
    });
  }

  render(){
    const scale = {
      value: {alias: 'FNG值'},
      price: {alias: '比特币价格'},
    };
    return (
      <div>
        <h1 style={{textAlign:"center"}}>恐惧贪婪指数和比特币价格的关系</h1>
        <Chart height={800} padding={[20, 45, 20, 30]} data={this.state.data} scale={scale} forceFit>
          <Axis />
          <Tooltip />
          <Geom type="line" position="date*value" size={2} shape="smooth" />
          <Geom type="line" position="date*price" size={3} shape="smooth" color="#fdae6b" />
        </Chart>
      </div>
    )
  }
}

export default FngPage;