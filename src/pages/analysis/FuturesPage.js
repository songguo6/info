import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, View } from 'bizcharts';
import moment from 'moment';
import axios from 'axios';

class FuturesPage extends Component {

  state = {data: []}

  componentDidMount(){
    axios.get('https://api.hbdm.com/market/history/kline?period=1day&symbol=BTC_CQ&size=300').then(res => {
      let chartData = [];
      const rawData = [...res.data.data];
      rawData.forEach(item => {
        chartData.push({
          date: moment(parseInt(item.id*1000)).format('YYYY-MM-DD'),
          open: item.open,
          close: item.close,
          low: item.low,
          high: item.high,
          amount: item.amount,
          trend: item.open <= item.close ? 'up' : 'down',
          range: [item.open, item.close, item.high, item.low],
        });
      });

      axios.get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=1541692800000&end='+moment()).then(res => {
        let newData = [...chartData];
        chartData.forEach((itemChart, index) => {
          res.data.data.forEach(item => {
            if(itemChart.date === item.date.substring(0, 10)){
              newData[index].price = parseFloat(parseFloat(item.priceUsd).toFixed(2));
            }
          })
        })
        this.setState({data: newData});
      }).catch(error => {
        console.log(error);
      })
    }).catch(error => {
      console.log(error);
    });
  }

  render(){
    const data = this.state.data;
    const scale = {
      open: { alias: '开盘价'},
      close: { alias: '收盘价'},
      low: { alias: '最低价'},
      high: { alias: '最高价'},
      price: { alias: '现货价',  tickInterval:2000 },
      range: { tickInterval:2000 },
    };
    return (
      <div>
        <h1 style={{textAlign:"center"}}>比特币季度合约价格和现货价格的关系</h1>
        <Chart height={800} padding={[20, 45, 20, 45]} data={data} scale={scale} forceFit>
          <Tooltip
            showTitle={false}
            itemTpl="<li data-index={index}><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}{value}</li>"
          />
          <View end={{x: 1, y: 0.6}} data = {data}>
            <Axis name="price"  visible={false}/>
            <Axis name="range"  />
            <Geom 
              type="schema" position="date*range"
              color={[
                "trend",
                val => {
                  if (val === "up") return "#2fc25b";
                  if (val === "down") return "#f04864";
                }
              ]}
              tooltip={[
                "date*open*close*high*low",
                (date, open, close, high, low) => {
                  return {
                    name: date,
                    value:
                      '<br><span style="padding-left: 16px">开盘价：' +
                      open +
                      "</span><br/>" +
                      '<span style="padding-left: 16px">收盘价：' +
                      close +
                      "</span><br/>" +
                      '<span style="padding-left: 16px">最高价：' +
                      high +
                      "</span><br/>" +
                      '<span style="padding-left: 16px">最低价：' +
                      low +
                      "</span>"
                  };
                }
              ]}
              shape="candle"
            />
            <Geom type="line" position="date*price" size={3} shape="smooth" color="#fdae6b" />
          </View>
          <View start={{ x: 0, y: 0.65}} data={data}>
            <Axis name="amount" label={{formatter: val => parseInt(val / 1000, 10) + "k"}} />
            <Axis name="date" label={null} />
            <Geom
              type="interval"
              position="date*amount"
              color={[
                "trend",
                val => {
                  if (val === "up") return "#2fc25b";
                  if (val === "down") return "#f04864";
                }
              ]}
              tooltip={[
                "date*amount",
                (date, amount) => {
                  return {
                    name: date,
                    value: '<br/><span style="padding-left: 16px">成交量：' + amount + "</span><br/>"
                  };
                }
              ]}
              shape="candle"
            />
          </View>
        </Chart>
      </div>
    )
  }
}

export default FuturesPage;