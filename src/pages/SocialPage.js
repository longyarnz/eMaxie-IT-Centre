import React, { Component } from 'react';
import SocialPanel from '../components/SocialPanel';

export default class SocialPage extends Component {
  render() {
    return (
      <SocialPanel iconDisplay={this.props.iconDisplay} />
    );
  }
}
