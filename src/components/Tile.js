import React, { Component } from 'react';
import PriceList from '../files/Price-List.png';

export default class Tile extends Component {
  _handleClickService(object){
    return this.props.iconDisplay.add(object);
  }

  _handleClickSocial(object){
    const event = new MouseEvent('click', {
      'view': window,
      'bubbles': false,
      'cancelable': true
    });
    const print = document.getElementById(object.title);
    print.dispatchEvent(event);
  }

  sortTitle(title){
    switch(title){
      case "Download Our Price List":
        return <a href={PriceList} id="Download Our Price List" download="Price-list-October-2017.pdf">Print</a>;
      case "Like Our Facebook Page":
        return <a href='https://web.facebook.com/eMaxieworks' id={title} target="_blank">Print</a>;
      case "Follow eMaxie On Twitter":
        return <a href='https://twitter.com/emaxieworks' id={title} target="_blank">Print</a>;
      default: return <a href='https://www.instagram.com/emaxieworks' id={title} target="_blank">Print</a>;
    }
  }

  render() {
    const { src, title, footer, centreTile } = this.props;
    const imageData = { src, title, footer };
    const a = ()=>this._handleClickService(imageData);
    const b = ()=>this._handleClickSocial(imageData);
    const c = this.sortTitle(title);
    const sortTile = this.props.iconDisplay.type === "service" ? {a, b: ""} : {a: b, b: c};

    return (
      <div className="tile" onClick={sortTile.a}>
        {sortTile.b}
        <figure className={centreTile} title="Click to open Tile">
          <i className={src}></i>
          <figcaption>{title}</figcaption>
          <footer>{footer}</footer>
        </figure>
      </div>
    )
  }  
}