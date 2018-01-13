import React, { Component } from 'react';
import TilesSection from './TilesSection';

export default class MediaSection extends Component {
	constructor(props){
    super(props);
    this.state = {
      client: {offsetTop: 0, clientHeight: 0},
      mount: false,
      animate: "",
      tileClass: ""
    }
  }

  // componentWillReceiveProps() {
    // const { scrolla } = this.props.iconDisplay;
    // const { client, mount } = this.state;
    // const checkHeight = scrolla.scrollHeight > client.offsetTop + client.clientHeight ? scrolla.clientHeight / 1.75 : scrolla.clientHeight;
    // let animate = mount && scrolla.scrollTop >= client.offsetTop - checkHeight ? "" : "dim-opacity";
    // animate = mount && scrolla.offsetWidth > 768 && scrolla.scrollTop >= client.offsetTop + checkHeight + 100 ? "dim-opacity" : animate;
    // const tileClass = animate === "" ? "clear-" : "";
    // this.setState({animate, tileClass});  
  // }

  // componentDidMount() {
    // this.setState({
    //   client: this.refs.media,
    //   mount: true
    // });
  // }

	render() {
		const iconDisplay = this.props.iconDisplay;
		iconDisplay.type = "social";
    // iconDisplay.tile = this.state.tileClass;
    return (
      <section className={"section-black "+this.state.animate} ref="media">
	      <div className="block">
		      <div className="service-section">
			    	<h1 className="service-section emaxie">We <span>LOVE</span> Social Media Too</h1>
			    	<TilesSection tilesList={this.props.tilesList} iconDisplay={iconDisplay} />
			    </div>
		    </div>
      </section>
	  );
  }
}
