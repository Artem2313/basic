import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  state = {
    news: '',
  };

  render() {
    const { news } = this.state;
    return (
      <div>
        <Header props={news} />
      </div>
    );
  }
}
