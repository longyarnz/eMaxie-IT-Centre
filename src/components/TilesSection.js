import React, { Component } from 'react';
import TilesPanel from './TilesPanel';

export default class TilesSection extends Component {
	render() {
    return (
      <div>
      	<div className="service-section">
		    	<TilesPanel tilesList={this.props.tilesList} iconDisplay={this.props.iconDisplay} />
		    </div>
		   </div>
    );
  }
}
