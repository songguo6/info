import BaseWidget from './BaseWidget';

export default class MiniSymbolOverviewWidget extends BaseWidget {

  widgetName = () => ('mini-symbol-overview');

  configuration = () => ({
    locale: this.props.locale ? this.props.locale : 'zh_CN',
    width: this.props.width ? this.props.width : '100%',
    height: this.props.height ? this.props.height : '220',
    symbol: this.props.symbol ? this.props.symbol : 'BINANCE:EOSUSDT',
  });
}

