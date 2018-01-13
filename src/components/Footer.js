import React, { Component } from 'react';

export default class Footer extends Component {
	constructor(props){
    super(props);
    this.state = {
      client: {offsetTop: 0, clientHeight: 0},
      mount: false,
      animate: ""
    }
  }

  render() {
  	return (
      <footer className={this.state.animate} ref="footer">&copy; eMaxie <span>2017</span></footer>
    );
  }
}
