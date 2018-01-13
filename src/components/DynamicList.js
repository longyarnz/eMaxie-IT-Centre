import React, { Component } from 'react';

export default class DynamicList extends Component {
	render() {
    return (
    	<div className="dynamic-list">
	    	<ul>
	    		{
	    			this.props.list.map((item, i) => {
	    				return <li key={i}>{item}</li>
	    			})
	    		}
	    	</ul>
	    </div>
		);
  }
}
