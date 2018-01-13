import React, { Component } from 'react';
import TilesSection from './TilesSection';

export default class ServiceSection extends Component {
	constructor(props){
    super(props);
    this.state = {
      client: {offsetTop: 0, clientHeight: 0},
      mount: false,
      animate: "",
      tileClass: ""
    }
  }

  render() {
		const iconDisplay = this.props.iconDisplay;
		iconDisplay.type = "service";
    return (
      <section className={"section-black "+this.state.animate} ref="service">
	      <div className="block">
		      <div className="service-section">
			    	<h1 className="service-section emaxie">How May We <span>HELP</span> You?</h1>
			    	<TilesSection tilesList={this.props.tilesList} iconDisplay={iconDisplay} />
			    </div>
		    </div>
      </section>
	  );
  }
}
