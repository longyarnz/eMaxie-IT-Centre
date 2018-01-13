import React, { Component } from 'react';
import NameForm from './NameForm';

export default class ContactSection extends Component {
	constructor(props){
    super(props);
    this.state = {
      client: {offsetTop: 0, clientHeight: 0},
      mount: false,
      animate: "dim-opacity"
    }
  }

  // componentWillReceiveProps() {
    // const { scrolla } = this.props.iconDisplay;
    // const { client, mount } = this.state;
    // const checkHeight = scrolla.scrollHeight > client.offsetTop + client.clientHeight ? scrolla.clientHeight / 1.75 : scrolla.clientHeight;
    // let animate = mount && scrolla.scrollTop >= client.offsetTop - checkHeight ? "" : "dim-opacity";
    // animate = mount && scrolla.offsetWidth > 768 && scrolla.scrollTop >= client.offsetTop + checkHeight + 100 ? "dim-opacity" : animate;
    // this.setState({animate}); 
  // }

  // componentDidMount() {
    // this.setState({
    //   client: this.refs.contact,
    //   mount: true
    // });
  // }
  
	render() {
    return (
      <section className="section-white" ref="contact">
	      <div className="block">
		      <div className="contact-section">
			    	<h1 className="contact-section emaxie">We Can Also <span>CONTACT</span> You</h1>
			    	<NameForm />
			    </div>
		    </div>
      </section>
	  );
  }
}
