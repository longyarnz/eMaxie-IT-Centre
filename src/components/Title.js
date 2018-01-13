import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
	    <h1 className={this.props.divClass+" icon-panel-title"}>
	    	{ this.props.title !== "" ? this.props.title : "CLIENT PARTICULARS" }
	    </h1>
    );
  }
}
