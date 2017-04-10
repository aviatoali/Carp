import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import '../stylesheets/Header.css';

class Header extends Component {
  render(){
    return(
      <div className="header-bar">
        <div className="header-left-links">
          <div className="left-link">
            <Link to={'/app'}>
              <Glyphicon
                glyph="search"
                className="link-icon"
              >
              </Glyphicon>
            </Link>
          </div>
        </div>
        <div className="header-right-links">
            <div className="right-link">
              <Link to={'/app'}>
                <Glyphicon
                   glyph="map-marker"
                   className="link-icon"
                >
                </Glyphicon>
              </Link>
            </div>
            <div className="right-link">
              <Link to={'/app'}>
                <Glyphicon
                  glyph="earphone"
                  className="link-icon"
                >
                </Glyphicon>
              </Link>
            </div>
            <div
              className="right-link"
              id="clock-link"
            >
              <Link to={'/app'}>
                <Glyphicon
                  glyph="time"
                  className="link-icon"
                  >
                </Glyphicon>
              </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
