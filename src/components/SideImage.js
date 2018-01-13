import React, { Component } from 'react';

export default class SideImage extends Component {
  render() {
  	const { title = "", src = "", footer = "" } = this.props.imageData;
    return (
      <aside className={this.props.divClass}>
      	<i className={src}></i>
      	<h1>{title}</h1>
      	<footer>{footer}</footer>
      </aside>
    );
  }
}
