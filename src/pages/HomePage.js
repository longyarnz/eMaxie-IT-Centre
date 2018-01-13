import React, { Component } from 'react';
import LandingPanel from '../components/LandingPanel';

export default class HomePage extends Component {
  render() {
    return (
      <LandingPanel iconDisplay={this.props.iconDisplay} />
    );
  }
}
