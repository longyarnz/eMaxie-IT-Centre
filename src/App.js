import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import IconPage from './pages/IconPage';
import SocialPage from './pages/SocialPage';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      iconPageDisplay: "no-display",
      socialPageDisplay: "no-display",
      imageData: {}
    }
    this._addIconPageDisplay = this._addIconPageDisplay.bind(this);
    this._removeIconPageDisplay = this._removeIconPageDisplay.bind(this);
    this._offset = this._offset.bind(this);
  }

  _addIconPageDisplay(imageData){
  	this.setState({
  		iconPageDisplay: "",
  		imageData
  	});
  }

  _offset(ref, refs){
    this.setState({
      scrolla: ref
    });
  }

  _addSocialPageDisplay(imageData){
  	this.setState({
  		socialPageDisplay: "",
  		imageData
  	});
  }

  _removeIconPageDisplay(){
  	setTimeout(()=> {
      this.setState({
    		iconPageDisplay: "no-display",
    		socialPageDisplay: "no-display"
    	})
    }, 100);
  }

  render() {
    const tilesList = [
			{
				src: "fa fa-laptop", title: "Repair Your PC", footer: "We can repair your LAPTOP"
			},{
				src: "fa fa-archive", title: "Buy A New PC", footer: "We know the LAPTOP that will serve you well"
			},{
				src: "fa fa-clone", title: "Swap Your Old PC", footer: "We can offer you a BETTER one"
			},{
        src: "fa fa-send", title: "Contact Our Technicians", footer: "We offer the BEST and the CHEAPEST"
      }
	  ];

	  const socialMedia = [
	  	{
        src: "fa fa-file-pdf-o", title: "Download Our Price List"
      },{
        src: "fa fa-facebook", title: "Like Our Facebook Page"
      },{
        src: "fa fa-twitter", title: "Follow eMaxie On Twitter"
      },{
        src: "fa fa-instagram", title: "Follow eMaxie On Instagram"
      }
	  ];

	  const iconDisplay = {
  		add: (object) => this._addIconPageDisplay(object),
  		remove: () => this._removeIconPageDisplay(),
  		social: (object) => this._addSocialPageDisplay(object),
  		displayState: this.state.iconPageDisplay,
  		socialState: this.state.socialPageDisplay,
      scrolla: "",
  		tilesList,
  		socialMedia,
  		imageData: this.state.imageData
  	}
		
		return (
      <div ref="app" className="scrollTop">
      	<HomePage iconDisplay={iconDisplay} />
      	<SocialPage iconDisplay={iconDisplay} />
      	<IconPage iconDisplay={iconDisplay} />
      </div>
    );
  }
}
