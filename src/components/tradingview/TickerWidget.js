import BaseWidget from './BaseWidget';

export default class TickerWidget extends BaseWidget {

  widgetName = () => ('tickers');

  configuration = () => ({
    locale: this.props.locale ? this.props.locale : 'zh_CN',
  });
}

