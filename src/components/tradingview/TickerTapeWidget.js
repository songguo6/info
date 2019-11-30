import BaseWidget from './BaseWidget';

const defaultSymbols = [
  {
    "description": "BTC",
    "proName": "BINANCE:BTCUSDT"
  },
  {
    "description": "ETH",
    "proName": "BINANCE:ETHUSDT"
  },
  {
    "description": "XRP",
    "proName": "BINANCE:XRPUSDT"
  },
  {
    "description": "BCH",
    "proName": "BINANCE:BCHUSDT"
  },
  {
    "description": "LTC",
    "proName": "BINANCE:LTCUSDT"
  },
  {
    "description": "EOS",
    "proName": "BINANCE:EOSUSDT"
  },
  {
    "description": "BNB",
    "proName": "BINANCE:BNBUSDT"
  }
];

export default class TickerTapeWidget extends BaseWidget {

  widgetName = () => ('ticker-tape');

  configuration = () => ({
    locale: this.props.locale ? this.props.locale : 'zh_CN',
    symbols: this.props.symbols ? this.props.symbols : defaultSymbols,
    displayMode: 'adaptive',
  });

  style = () => ({ marginTop: 9 })
}