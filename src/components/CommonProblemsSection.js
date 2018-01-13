import React, { Component } from 'react';
import DynamicList from './DynamicList';

export default class CommonProblemsSection extends Component {
	render() {
		const list = [
			"Is your internet slow?", 
			"Is your computer slow?",
			"Do you think its time to upgrade your PC? ",
			"Does your PC keep freezing everytime you turn it on?", 
			"Do you need to set-up an IT hardware and make it work?",
		];

    return (
    	<section className="section-black common-section">
	      <div className="block">
		      <div className="patronize-section common-section">
		      	<h1 className="emaxie">We Can <span>FIX</span> It, Trust us.</h1>
		      	<DynamicList list={list} />
		      </div>
	      </div>
      </section>
    );
  }
}
