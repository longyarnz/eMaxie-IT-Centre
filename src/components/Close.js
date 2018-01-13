import React, { Component } from 'react';

export default class Close extends Component {
  render() {
    return (
	    <div className="close">
	    	<button className={this.props.divClass+" close"} onClick={()=>this.props.close()}>&times;</button>
	    </div>
    );
  }
}
