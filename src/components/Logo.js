import React, { Component } from 'react';
import bg from '../files/bg5.jpg';
import logo from '../files/logo.png';

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
      	<h3>
      		We Simply Make It Work
      	</h3>
      	<img src={logo} className="logo" alt="" />
      	<img src={bg} className="bg" alt="" />
      </div>
    );
  }
}
