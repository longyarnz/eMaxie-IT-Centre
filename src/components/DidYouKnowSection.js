import React, { Component } from 'react';

export default class ContactSection extends Component {
	render() {
		const yes = (
			<div>
				"When you download a <span>PDF</span> file and its name ends with <span>".exe"</span>, it is most likely a <span>VIRUS</span>."
			</div>
		);
    return (
      <section className="did-section">
	      <div className="block">
		      <div className="did-section">
			    	<h1 className="did-section emaxie">Do <span className="slab">YOU</span> Know...</h1>
			    	<div className="jumbotron">
			    		{this.props.text ? this.props.text: yes}
			    	</div>
			    </div>
		    </div>
      </section>
	  );
  }
}
