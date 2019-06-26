import BaseWidget from './BaseWidget';

export default class CryptoMktScreenerWidget extends BaseWidget {

  widgetName = () => ('screener');

  configuration = () => ({
    locale: this.props.locale ? this.props.locale : 'zh_CN',
    width: this.props.width ? this.props.width : '100%',
    height: this.props.height ? this.props.height : '512',
    symbol: this.props.symbol ? this.props.symbol : 'BINANCE:EOSUSDT',
    screener_type: 'crypto_mkt',
  });
}

