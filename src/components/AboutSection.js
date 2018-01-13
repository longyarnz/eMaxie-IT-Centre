import React, { Component } from 'react';

export default class AboutSection extends Component {
	constructor(props){
    super(props);
    this.state = {
      client: {offsetTop: 0, clientHeight: 0},
      mount: false,
      animate: ""
    }
  }

  render() {
    return (
    	<section className={"about-section section-white "+this.state.animate} ref="about">
	      <div className="block">
		      <div className="about-section">
		      	<h1 className="emaxie">Let's Tell You <span>ABOUT</span> Us</h1>
		      	<p>
		      		In everything we do, eMaxie aims to provide optimium customer satisfaction. 
              Having seen how IT service providers take advantage of computer users, 
              we resolved to start a company that will educate and provide first class service to customers.
		      	</p>
		      	<p>
              We believe in building firm relationships with our clients. We provide creative and customised solutions for our clients. 
              Our services are grounded in honesty and mutual respect.
		      		Our team of experienced technicians are always willing to go out of their way to offer solutions 
		      		to the ever-present problems of the computer age.
		      	</p>
		      </div>
	      </div>
      </section>
    );
  }
}
