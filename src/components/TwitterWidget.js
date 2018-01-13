import React, { Component } from 'react';

export default class TwitterWidget extends Component {
  render() {
  	const frameStyle = { 
  		position: "absolute", 
  		visibility: "hidden", 
  		display: "block", 
  		width: "0px", 
  		height: "0px", 
  		padding: "0px", 
  		border: "none" 
  	}
  	
  	return (
  		<div>
	      <iframe id="twitter-widget-0" scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true" 
	      className="twitter-timeline twitter-timeline-rendered" style={frameStyle} 
	      data-height="600" data-width="1161.1"></iframe>
	      <a className="twitter-timeline twitter-timeline-error" data-link-color="#f00" 
	      href="https://twitter.com/BeyondIfe" data-height="600" data-width="1161.1" 
	      data-twitter-extracted-i1484639845192185126="true">Tweets by BeyondIfe</a>
	    </div>
    );
  }
}
