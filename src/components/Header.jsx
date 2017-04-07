import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import '../stylesheets/Header.css'

class Header extends Component {
  render(){
    return(
      <div className="header-bar">
        <div className="header-right">
            <div className="right-button-group">
              <Glyphicon glyph="map-marker" className="right-button-group-icon"></Glyphicon>
            </div>
            <div className="right-button-group">
              <Glyphicon glyph="earphone" className="right-button-group-icon"></Glyphicon>
            </div>
            <div className="right-button-group">
              <Glyphicon glyph="time" className="right-button-group-icon"></Glyphicon>
            </div>
        </div>
        <div className="header-left">
          <div className="left-button-group">
            <Glyphicon glyph="search" className="left-button-group-icon"></Glyphicon>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
