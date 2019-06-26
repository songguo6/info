import BaseWidget from './BaseWidget';

export default class TechnicalAnalysisWidget extends BaseWidget {

  widgetName = () => ('technical-analysis');

  configuration = () => ({
    locale: this.props.locale ? this.props.locale : 'zh_CN',
    width: this.props.width ? this.props.width : '100%',
    height: this.props.height ? this.props.height : '450',
    symbol: this.props.symbol ? this.props.symbol : 'BINANCE:EOSUSDT',
    isTransparent: this.props.isTransparent ? this.props.isTransparent : false,
    interval: this.props.interval ? this.props.interval : '1h',
  });
}

