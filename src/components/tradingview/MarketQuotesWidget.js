import BaseWidget from './BaseWidget';

export default class MarketQuotesWidget extends BaseWidget {

  widgetName = () => ('market-quotes');

  configuration = () => ({
    locale: this.props.locale ? this.props.locale : 'zh_CN',
    width: this.props.width ? this.props.width : '100%',
    height: this.props.height ? this.props.height : '450',
  });
}

