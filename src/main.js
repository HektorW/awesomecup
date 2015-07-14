

// var React = require('react');
import React from 'react';

class Foo extends React.Component {
  render() {
    return <h1>Awesomecup</h1>;
  }
}


React.render(<Foo/>, document.querySelector('.app'));
