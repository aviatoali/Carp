import React, {Component} from 'react';
import '../stylesheets/Footer.css';

export default class Footer extends Component {

  render() {
    return (
      <div className="footer-bar">
        <div className="footer-links">
          <div className="footer-link">
            About Us
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-link">
            Terms
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-link">
            Privacy Policy
          </div>
        </div>
        <p>
          PLS is a registered service mark and other marks are service marks of PLS Financial Services, Inc. &copy; 2016
        </p>
      </div>
    );
  }
}
