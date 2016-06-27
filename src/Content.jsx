import React, { Component } from 'react';

import './content.less';

export default class Content extends Component {
  componentDidMount() {
    console.log('content load finish!');
  }

  render() {
    return (
      <div className="content">
        <p>内容内容内容内容!</p>
      </div>
    );
  }
}

