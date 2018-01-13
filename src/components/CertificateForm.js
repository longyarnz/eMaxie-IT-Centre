import React, { Component } from 'react';

export default class CertificateForm extends Component {
  render() {
    return (
      <div className="certificate">
      	<div className="name">
      		<label>Name: </label>
      		{this.props.name}</div>
      	<div className="service">
      		<label>Service Requested: </label>
      		{this.props.service}
      	</div>
        <button className="print" onClick={(e)=>{
          //eslint-disable-next-line
          e.preventDefault();Javascript:print()}}></button>
      </div>
    );
  }
}
