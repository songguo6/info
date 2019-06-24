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
      locale: 'zh_CN',
      width: '100%',
      height: '450',
      symbol: 'BINANCE:EOSUSDT',
      showIntervalTabs: true,
      interval: '1h',
      colorTheme: 'light',
      isTransparent: false,
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

