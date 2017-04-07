import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import '../stylesheets/WebTask.css';

class Header extends Component {
  render(){
    return(
      <div className="header-bar">
        <div className="header-left-button-group">
          <div className="header-left-button">
            <Glyphicon glyph="search" className="button-icon"></Glyphicon>
          </div>
        </div>
        <div className="header-right-button-group">
            <div className="header-right-button">
              <Link to={'/app'}><Glyphicon glyph="map-marker" className="button-icon"></Glyphicon></Link>
            </div>
            <div className="header-right-button">
              <Link to={'/app'}><Glyphicon glyph="earphone" className="button-icon"></Glyphicon></Link>
            </div>
            <div className="header-right-button" id="clock-icon-div">
              <Link to={'/app'}><Glyphicon glyph="time" className="button-icon"></Glyphicon></Link>
            </div>
        </div>
      </div>
    )
  }
}

export default Header;
