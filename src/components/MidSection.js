import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Logo from './Logo';

export default class MidSection extends Component {
	constructor(props){
		super(props);
		this.state = { slab: "", highLight: "" }
		this._handleName = this._handleName.bind(this);		
	}	

	_handleName(slab){
    slab = slab !== "" ? slab + ", " : "";
    const highLight = slab !== " " ? "slab-o" : "";
    this.setState({ slab, highLight });
  }

  render() {
    return (
      <section className="midsection" ref="section">
	      <div className="block block-logo">
		      <Logo />
		      <Jumbotron slab={this.state.slab} highLight={this.state.highLight} />
		    </div>
      </section>
	  );
  }
}
