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
    "proName": "BINANCE:BCHABCUSDT"
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
  },
  {
    "description": "BSV",
    "proName": "HUOBI:BSVUSDT"
  },
  {
    "description": "TRX",
    "proName": "BINANCE:TRXUSDT"
  },
  {
    "description": "ADA",
    "proName": "BINANCE:ADAUSDT"
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