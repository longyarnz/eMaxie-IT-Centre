import React, { Component } from 'react';
import CertificateForm from './CertificateForm';
import SideImage from './SideImage';
import Title from './Title';
import logo from '../files/logo.png';

export default class Certificate extends Component {
  render() {
    return (
      <div className={this.props.divClass}>
      	<img src={logo} className="certificate-logo" alt="" />
      	<span>{new Date().toDateString()}</span>
        <Title divClass={"certificate-title"} title={this.props.title} />
        <CertificateForm name={this.props.name} service={this.props.service} />
        <SideImage divClass={"side-image certificate-side-image"} imageData={ this.props.data } />
      </div>
    );
  }
}
