import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
	      <div className="block block-header">
	    		<div>
	    			<i className="fa fa-phone-square"></i> 070-8269-8340
	    		</div>
	    		<div>
	    			<i className="fa fa-envelope-square"></i> support@eMaxie.com
	    		</div>
	    		<div>
	    			<i className="fa fa-laptop"></i> emaxie IT Centre
	    		</div>
	    		<div>
	    			<i className="fa fa-twitter"></i> #emaxieworks
	    		</div>
	    		<div>
	    			<i className="fa fa-facebook"></i> emaxieworks
	    		</div>
	    		<div>
	    			<i className="fa fa-instagram"></i> emaxieworks
	    		</div>
	    	</div>	
    	</header>
    );
  }
}
