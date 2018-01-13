import React, { Component } from 'react';
import DynamicList from './DynamicList';

export default class PatronizeUsSection extends Component {
	render() {
		const list = [
			"FREE Softwares",
			"FREE anti-virus",
			"We offer GRADE 1 Quality", 
			"We DON'T sell fake/refurbished Laptops",
			"UNBEATABLE prices you can't get elsewhere", 
			"Professional advice on which laptop to buy"
		];

    return (
    	<section className="section-white">
	      <div className="block">
		      <div className="patronize-section">
		      	<h1 className="emaxie">Why You Must <span>Patronize</span> eMaxie!</h1>
		      	<DynamicList list={list} />
		      </div>
	      </div>
      </section>
    );
  }
}
