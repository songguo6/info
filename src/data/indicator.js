export const indicators = [{
  name: 'Price Models',
  info: [
    '实际指标（Realized Cap） = 实际市值计算成单个比特币的价值；',
    '平均指标（Average Cap） = 平均市值是市值的永恒移动平均线，即每日市值上限的累积总和除以市场的年龄（以天为单位）；',
    '底部指标（Delta Cap） = Realized Cap - Average Cap；',
    '顶部指标（Top Cap） = Average Cap * 35。',
  ],
  charts: [{
    title: 'bitcoin-price-models',
    link: 'https://charts.woobull.com/bitcoin-price-models',
  }],
  articles: [{
    title: '比特币价格模型之实际指标、平均指标、底部指标、顶部指标',
    link: 'https://bihu.com/article/1115889696',
  }],
},{
  name: 'SOPR',
  info: [
    'SOPR = 卖出价格 / 买入价格。',
    'SOPR > 1时，表名这笔交易是盈利的，否则亏损。',
    '在牛市中，SOPR=1基本上是支撑位；',
    '在熊市中，SOPR=1基本上是阻力位。',
    '(Spent Output Profit Ratio)',
  ],
  charts: [{
    title: 'Bitcoin: SOPR (10d Moving Average)',
    link: 'https://studio.glassnode.com/metrics?a=BTC&m=indicators.Sopr&mAvg=10&zoom=all',
  }],
  articles: [{
    title: 'Introducing SOPR: spent outputs to predict bitcoin lows and tops',
    link: 'https://medium.com/unconfiscatable/introducing-sopr-spent-outputs-to-predict-bitcoin-lows-and-tops-ceb4536b3b9',
  }],
},{
  name: 'NVT',
  info: [
    'NVT Ratio = 比特币总市值 / 每日链上交易额。',
    '当NVT比率变得很高时，表示总市值在增长，但链上交易没有相应的增长，这表明市场可能正处在泡沫之中，当前价格相对高估。',
    '(Network Value to Transactions Ratio)',
  ],
  charts:[{
    title: 'bitcoin-nvt-ratio(14 day median)',
    link: 'https://charts.woobull.com/bitcoin-nvt-ratio',
  }],
  articles: [{
    title: 'Introducing NVT Ratio (Bitcoin\'s PE Ratio), use it to detect bubbles',
    link: 'https://woobull.com/introducing-nvt-ratio-bitcoins-pe-ratio-use-it-to-detect-bubbles',
  },{
    title: 'Introducing NVT Ratio (Bitcoin\'s PE Ratio), use it to detect bubbles（中文翻译）',
    link: 'https://www.jianshu.com/p/8e71040a4eba',
  }],
},{
  name: 'NVTS',
  info: [
    'NVTS = 比特币总市值 / 每日链上交易额的90天平均值。',
    '(NVT Signal)',
  ],
  charts:[{
    title: 'bitcoin-nvt-signal',
    link: 'https://charts.woobull.com/bitcoin-nvt-signal',
  }],
  articles: [{
    title: 'NVT Signal, a new trading indicator to pick tops and bottoms',
    link: 'https://woobull.com/nvt-signal-a-new-trading-indicator-to-pick-tops-and-bottoms',
  }],
},{
  name: '2-Year MA Multiplier',
  info: [],
  charts: [{
    title: 'bitcoin-investor-tool',
    link: 'https://www.lookintobitcoin.com/charts/bitcoin-investor-tool',
  }],
  articles: [],
},{
  name: '200 Week Moving Average Heatmap',
  info: [],
  charts: [{
    title: '200-week-moving-average-heatmap',
    link: 'https://www.lookintobitcoin.com/charts/200-week-moving-average-heatmap',
  }],
  articles: [],
},{
  name: 'MVRV',
  info: [
    'MVRV Ratio = 市值 / 实际市值。',
    'Market Cap = 比特币数量 * 最近市场价格；',
    'Realised Cap = 区块链上流动的比特币交易的总价值。',
    'MVRV比率跌至1以下，预示着一个主要底部的来临。',
    '(Market Value to Realized Value Ratio)'
  ],
  charts: [{
    title: 'bitcoin-mvrv-ratio',
    link: 'https://charts.woobull.com/bitcoin-mvrv-ratio',
  },{
    title: 'BTC-MVRV指标',
    link: 'https://www.qkl123.com/data/mvrv/btc',
  }],
  articles: [{
    title: 'Introducing Realized Capitalization',
    link: 'https://coinmetrics.io/realized-capitalization',
  },{
    title: 'Bitcoin Market-Value-to-Realized-Value (MVRV) Ratio',
    link: 'https://medium.com/adaptivecapital/bitcoin-market-value-to-realized-value-mvrv-ratio-3ebc914dbaee',
  },{
    title: '比特币价格分析指标之实际市值（Realized Capitalization）',
    link: 'https://bihu.com/article/1650361136',
  }],
},{
  name: 'MVRV Z-Score',
  info: [],
  charts: [{
    title: 'mvrv-zscore',
    link: 'https://www.lookintobitcoin.com/charts/mvrv-zscore',
  }],
  articles: [],
},{
  name: 'Mayer Multiple',
  info: [
    'Mayer倍数 = 比特币价格 / 200日移动平均线价格。'
  ],
  charts: [{
    title: 'bitcoin-mayer-multiple',
    link: 'https://charts.woobull.com/bitcoin-mayer-multiple',
  },{
    title: 'BTC-Mayer Multiple指标',
    link: 'https://www.qkl123.com/data/mayer_multiple/btc',
  }],
  articles: [{
    title: '比特币价格分析指标之Mayer倍数（Bitcoin Mayer Multiple）',
    link: 'https://bihu.com/article/1090511101',
  }],
},{
  name: 'Network Momentum',
  info: [
    '比特币区块链上每日流动的BTC量。',
  ],
  charts: [{
    title: 'bitcoin-network-momentum',
    link: 'https://charts.woobull.com/bitcoin-network-momentum',
  }],
  articles: [{
    title: 'Bitcoin Network Momentum',
    link: 'https://blog.goodaudience.com/bitcoin-network-momentum-a42346b2f0ce',
  }],
},{
  name: '60-day Volatility',
  info: [
    '60天波动率，当波动率处于很低的值时，意味着即将发生变盘(暴涨或暴跌)。'
  ],
  charts: [{
    title: 'bitcoin-volatility',
    link: 'https://charts.woobull.com/bitcoin-volatility',
  }],
  articles: [],
},{
  name: 'VWAP',
  info: [
    'VWAP Ratio = VWAP / 比特币价格。',
    'VWAP指成交量加权平均价，即将多笔交易的价格按各自的成交量加权而算出的平均价，计算某日的VWAP，将当日成交总值除以总成交量即可。',
    '(Volume Weighted Average Price Ratio)'
  ],
  charts: [{
    title: 'bitcoin-vwap-ratio',
    link: 'https://charts.woobull.com/bitcoin-vwap-ratio',
  }],
  articles: [],
}];

export const UP = '➚';
export const DOWN = '➘';

export const nvt = [{
  'nvt_period': '2010-01-13 ~ 2013-02-08',
  'nvt' : [11347, DOWN, 19.25],
  'btc_period': '2010-01-13 ~ 2011-06-08 ~ 2013-02-08',
  'btc': [0.0007, UP, 29.03, DOWN, 22.78],
},{
  'nvt_period': '2013-02-08 ~ 2014-08-10',
  'nvt' : [19.25, UP, 109.06],
  'btc_period': '2013-02-08 ~ 2013-11-29 ~ 2014-08-10',
  'btc': [22.78, UP, 1128.73, DOWN, 589.37],
},{
  'nvt_period': '2014-08-10 ~ 2017-08-19',
  'nvt' : [109.06, DOWN, 23.99],
  'btc_period': '2014-08-10 ~ 2015-01-14 ~ 2017-08-19',
  'btc': [589.37, DOWN, 175.63, UP, 4160.33],
},{
  'nvt_period': '2017-08-19 ~ 2020-01-05',
  'nvt' : [23.99, UP, 97.59],
  'btc_period': '2017-08-19 ~ 2017-12-16 ~ 2020-01-05',
  'btc': [4160.33, UP, 19640, DOWN, 7345.53],
},{
  'nvt_period': '2020-01-05 ~ ',
  'nvt' : [97.59, DOWN],
  'btc_period': '2020-01-05 ~ ',
  'btc': [7345.53, DOWN],
}];