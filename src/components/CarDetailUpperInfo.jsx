import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import '../stylesheets/CarDetail.css';

class CarDetailUpperInfo extends Component {
  render() {
      console.log("this.props.carInfo.princeMin", this.props.carInfo.priceMin);
    return (
      <div className="car-desc-top">
        <div className="car-name"> Ford Focus </div>
        <div className="car-desc-info-table">
          <div className='car-desc-info-label'> Year </div>
          <div className='car-desc-info-entry'> 2012 </div>
          <div className='car-desc-info-label'> Price Range </div>
          <div className='car-desc-info-entry'> $8,500 - $9,000 </div>
          <div className='car-desc-info-label'> Mileage </div>
          <div className='car-desc-info-entry' id="car-desc-info-mileage"> 200,000 miles</div>
          <div className='car-desc-item-number'> Item Number: #1395P </div>
          <div className='car-desc-vin-number'> VIN: 3GNDA13D96S631406 </div>
          <div className='car-desc-share-label'> Share this car </div>
          <Link to={'/app'}><Glyphicon glyph="envelope" className="share-link"></Glyphicon></Link>
          <div>
            <div className="web-page-info-label">
              <div className='tbd'>Views</div>
              <div className='web-page-info-entry'>37</div>
            </div>
            <div className="web-page-info-label">
              <div className='tbd'>Saves</div>
              <div className='web-page-info-entry'>20</div>
            </div>
            <div className="web-page-info-label">
              <div className='tbd'>Shares</div>
              <div className='web-page-info-entry'>15</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CarDetailUpperInfo;
