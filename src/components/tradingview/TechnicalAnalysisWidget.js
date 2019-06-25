import React, { PureComponent } from 'react';

export default class TechnicalAnalysisWidget extends PureComponent {

  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
    script.async = true;
    script.innerHTML = JSON.stringify({
      locale: this.props.locale ? this.props.locale : 'zh_CN',
      width: this.props.width ? this.props.width : '100%',
      height: this.props.height ? this.props.height : '450',
      symbol: this.props.symbol ? this.props.symbol : 'BINANCE:EOSUSDT',
      showIntervalTabs: this.props.showIntervalTabs ? this.props.showIntervalTabs : true,
      interval: this.props.interval ? this.props.interval: '1h',
      colorTheme: this.props.colorTheme ? this.props.colorTheme : 'light',
      isTransparent: this.props.isTransparent ? this.props.isTransparent : false,
    });
    this._ref.current.appendChild(script);
  }
  
  render() {
    return(
      <div class="tradingview-widget-container" ref={this._ref} style={{marginBottom: 24}}>
        <div class="tradingview-widget-container__widget"></div>
      </div>
    )
  }
}

