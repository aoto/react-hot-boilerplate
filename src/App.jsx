import React, { Component } from 'react';

import './App.less';

export default class App extends Component {
  componentDidMount() {
    console.log('finish!');
    var img = document.createElement('img');
    img.src = require('./img.jpg');
    document.body.appendChild(img);
  }

  handleClick() {
    console.log(this);
  }
  
  render() {
    return (
      <h1>Hello: {this.props.name}</h1>
    );
  }
}