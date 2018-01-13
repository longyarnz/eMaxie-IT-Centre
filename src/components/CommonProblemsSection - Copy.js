import React, { Component } from 'react';
import DynamicList from './DynamicList';

export default class CommonProblemsSection extends Component {
	render() {
		const list = [
			"Overheating",
			"Poor Laptop Speed",
			"Blue Screen", 
			"Windows not Genuine Error", 
			"Keyboard Malfunction",
			"Coloured Lines on Screen"
		];

    return (
    	<section className="section-black common-section">
	      <div className="block">
		      <div className="patronize-section common-section">
		      	<h1 className="emaxie">Some Common Laptop <span>PROBLEMS</span></h1>
		      	<DynamicList list={list} />
		      </div>
	      </div>
      </section>
    );
  }
}
