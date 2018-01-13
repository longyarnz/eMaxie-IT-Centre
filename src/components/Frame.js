import React, { Component } from 'react';

export default class Frame extends Component {
  render() {
  	console.log(this.props.src);
    return (
      <iframe src={this.props.src} target='_top' />
    );
  }
}
