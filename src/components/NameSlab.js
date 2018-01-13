import React, { Component } from 'react';

export default class NameSlab extends Component {
  render() {
    return (
      <span className={this.props.highLight} >{this.props.slab}</span>
    );
  }
}
