import React, { Component } from 'react';
import DynamicForm from './DynamicForm';
import ServiceFunction from './ServiceFunction';
import Certificate from './Certificate';
import SideImage from './SideImage';
import Title from './Title';
import Close from './Close';
import Ajax from './Ajax';
import ParseQuery from './ParseQuery';

export default class IconPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      anime: "anime-on",
      certificateName: "",
      formDisplay: "",
      changed: false,
      certificateDisplay: "no-display"
    }
  }

  submit(data, type){
    const url = "http://emaxie.org.ng/server/mail.php";
    const method = "POST";
    const async = true;
    const name = data.name.value;
    data = ParseQuery(data, type);
    Ajax(url, method, data, async, this.responseHandler);
    this.setState({
      certificateName: name,
      formDisplay: "no-display",
      changed: true,
      certificateDisplay: ""
    })
  }

  responseHandler(response){
    console.log(response);
  }

  render() {
    let type;
    const { imageData } = this.props.iconDisplay;
    const formData = ServiceFunction(imageData.title);
    switch (imageData.title) {
      case 'Swap Your Old PC':
        type = "Laptop Swap";
        break;
      case 'Contact Our Technicians':
        type = "Technical Consultation";
        break;
      case 'Buy A New PC':
        type = "Laptop Purchase";
        break;
      default:
        type = "Laptop Repair";
      break;
    }
    const certificateData = {
      src: "fa fa-certificate",
      title: "",
      footer: "WE SIMPLY MAKE IT WORK"
    }    
    const { anime } = this.state;
    return (
    	<section className={`icon-panel ${this.props.iconDisplay.displayState}`}>
	    	<div className="block center">
		      <div className={`icon-panel ${anime}`}>
            <Close close={()=>
              {
                // eslint-disable-next-line
                this.props.iconDisplay.remove();
                this.setState({certificateName: "",formDisplay: "",certificateDisplay: "no-display",changed: false})
              }} 
            />
		      	<Title divClass={this.state.formDisplay} title={imageData.title} />
		      	<DynamicForm className={"icon-panel "+this.state.formDisplay} formData={formData} 
              button="" submit={(data)=>this.submit(data, imageData.title)} clear={true}  
            />
		      	<SideImage divClass={"side-image "+this.state.formDisplay} imageData={ imageData } />
            <Certificate divClass={"certificate-panel "+this.state.certificateDisplay}  title="CERTIFICATE OF PATRONAGE" 
              service={ type } name={ this.state.certificateName } data={ certificateData }  
            />
          </div>
		    </div>
		  </section>
    );
  }
}
