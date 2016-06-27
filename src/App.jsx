import React, { Component } from 'react';
import Content from './Content.jsx';

import './app.less';

export default class App extends Component {
  componentDidMount() {
    console.log('app load finish!');
    const img = document.createElement('img');
    /* eslint global-require: 0 */
    img.src = require('./img.jpg');
    document.body.appendChild(img);
  }

  render() {
    return (
      <div className="container">
        <h1>Hello: {this.props.name}</h1>
        <Content />
      </div>
    );
  }
}

App.propTypes = {
  name: React.PropTypes.string.isRequired
};
