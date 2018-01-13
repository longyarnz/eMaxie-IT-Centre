import React, { Component } from 'react';
import IconPanel from '../components/IconPanel';

export default class IconPage extends Component {
  render() {
    return (
      <IconPanel iconDisplay={this.props.iconDisplay} />
    );
  }
}
