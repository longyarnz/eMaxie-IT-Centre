import React, { Component } from 'react';
import Frame from './Frame';
import TwitterWidget from './TwitterWidget';
import Title from './Title';
import Close from './Close';

export default class SocialPanel extends Component {
  render() {
    const { imageData } = this.props.iconDisplay;
    let src, frame;
    switch(imageData.title){
      case "Like Our Facebook Page": 
        src = "https://web.facebook.com/eMaxieworks/";
        frame = <Frame src={src} /> 
        break;
      case "Follow eMaxie on Instagram": 
        src = "https://www.instagram.com/emaxieworks/";
        frame = <Frame src={src} /> 
        break;
      default:
        frame = <TwitterWidget />;
    }
    
    return (
    	<section className={"icon-panel " + this.props.iconDisplay.socialState}>
	    	<div className="block">
		      <div className="icon-panel social-panel">
            <Close close={()=>this.props.iconDisplay.remove()}/>
		      	<Title title={imageData.title} />
            {frame}
		      </div>
		    </div>
		  </section>
    );
  }
}
