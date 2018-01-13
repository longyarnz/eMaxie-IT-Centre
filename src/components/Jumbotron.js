import React, { Component } from 'react';
import NameSlab from './NameSlab';

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
      	<h2 className="jumbotron">
          <NameSlab slab={'eMaxie'} /> is the ICT firm that puts you first. Our services include: Computer Sales, Computer Repairs, Graphics Design, 
          Website Design and Development. At <NameSlab slab={'eMaxie'} />, we simply make it work even when you think it impossible. Call us now on: 
          <NameSlab slab={' 07082698340'} />.<br /> Our Head Office is at OAU New Market, <span>Zone C, Behind Dove Phone World</span>.
      	</h2>
      </div>
    );
  }
}
