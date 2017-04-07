import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheets/desktop-stylesheets/Footer.css';

class Footer extends Component {
  render(){
    return(
      <div className="footer-bar">
        <div className="footer-bar-links-group">
          <div className="footer-bar-link">
            <Link to={'/app'}>
            About Us
            </Link>
          </div>
        </div>
        <div className="footer-bar-links-group">
          <div className="footer-bar-link">
            <Link to={'/app'}>
              Terms
            </Link>
          </div>
        </div>
        <div className="footer-bar-links-group">
          <div className="footer-bar-link">
            <Link to={'/app'}>Privacy Policy</Link>
          </div>
        </div>
        <footer className="service-mark-statement">
          <p>
            PLS is a registered service mark and other marks are service marks of PLS Financial Services, Inc. &copy; 2016
          </p>
        </footer>
      </div>
    )
  }
}

export default Footer;
