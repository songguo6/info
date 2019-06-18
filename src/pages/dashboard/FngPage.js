import React, { Component, Fragment } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import moment from 'moment';
import axios from 'axios';

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
      this.setState({data: chartData});
    }).catch(function (error) {
      console.log(error);
    });
  }

  render(){
    const cols = {
      date: {alias: "日期"},
      value: {alias: "数值"}
    };
    return (
      <Fragment>
        <h1 style={{textAlign:"center"}}>恐惧贪婪指数</h1>
        <div>
        <Chart height={800} data={this.state.data} scale={cols} forceFit>
          <Axis name="date" />
          <Axis name="value" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="date*value" size={2} shape="smooth"/>
        </Chart>
      </div>
      </Fragment>
    )
  }
}

export default FngPage;