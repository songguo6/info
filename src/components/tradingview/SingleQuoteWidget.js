import BaseWidget from './BaseWidget';

export default class SingleQuoteWidget extends BaseWidget {

  widgetName = () => ('single-quote');

  configuration = () => ({
    locale: this.props.locale ? this.props.locale : 'zh_CN',
    width: this.props.width ? this.props.width : '100%',
    symbol: this.props.symbol ? this.props.symbol : 'BINANCE:EOSUSDT',
  });
}

