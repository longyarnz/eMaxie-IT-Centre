import React, { Component } from 'react';
import Tile from './Tile';

export default class TilesContainer extends Component {
  render() {
  	let centre;
    const { iconDisplay } = this.props;
    return (
      <div className="tile-container" ref="con" onClick={e=>{e.preventDefault();console.log(this.refs)}}>
      	{
      		this.props.tilesList.map((tile, i) => {
      			centre = "no-centre";
      			return(
      				<Tile key={i} keyID={i} src={tile.src} title={tile.title} footer={tile.footer} centreTile={centre} iconDisplay={iconDisplay} />
      			)
      		})
      	}
      </div>
    );
  }
}
