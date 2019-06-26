import React, { PureComponent } from 'react';

export default class BaseWidget extends PureComponent {

  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  widgetName() {
    throw new Error('must be overridden');
  }

  configuration() {
    throw new Error('must be overridden');
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-' + this.widgetName() + '.js'
    script.async = true;
    script.innerHTML = JSON.stringify(this.configuration());
    this._ref.current.appendChild(script);
  }

  style = () => ({ marginBottom: 24 })
  
  render() {
    return(
      <div className="tradingview-widget-container" ref={this._ref} style={this.style()}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    )
  }
}

