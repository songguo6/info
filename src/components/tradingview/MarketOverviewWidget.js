import BaseWidget from './BaseWidget';

export default class MarketOverviewWidget extends BaseWidget {

  widgetName = () => ('market-overview');

  configuration = () => ({
    locale: this.props.locale ? this.props.locale : 'zh_CN',
    width: this.props.width ? this.props.width : '100%',
    height: this.props.height ? this.props.height : '660',
  });
}

