import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import '../stylesheets/CarDetail.css';

class CarDetailUpperInfo extends Component {
  render() {
    return (
      <div className="car-desc-top">
        <div className="car-name"> { this.props.carDesc.name } </div>
        <div className="car-desc-info-table">
          <div className="car-desc-info-label"> Year </div>
          <div className="car-desc-info-entry"> { this.props.carDesc.year } </div>
          <div className="car-desc-info-label"> Price Range </div>
          <div className="car-desc-info-entry"> { `\$${ this.props.carDesc.minPrice } - \$${ this.props.carDesc.maxPrice }` } </div>
          <div className="car-desc-info-label"> Mileage </div>
          <div className="car-desc-info-entry" id='car-desc-info-mileage'> { `${ this.props.carDesc.mileage } miles` } </div>
        </div>
        <div className="car-desc-info-table-lower">
            <div className="car-desc-info-label"> { `Item Number: #${ this.props.carDesc.itemNumber }` }  </div>
            <div className="car-desc-info-label"> { `VIN: ${ this.props.carDesc.vinNumber }` } </div>
            <div className="car-desc-share-section">
              <div className="car-desc-share-label"> Share this car  </div>
              <Link to={'/app'}>
                <Glyphicon
                  glyph="envelope"
                  className="share-link"
                  >
                </Glyphicon>
              </Link>
            </div>
            <div className="web-page-info-table">
              <div className="web-page-info">
                <div className="car-desc-info-label"> Views </div>
                <div className='web-page-info-entry'> { this.props.carDesc.pageViews } </div>
              </div>
              <div className="web-page-info">
                <div className="car-desc-info-label"> Saves </div>
                <div className="web-page-info-entry"> { this.props.carDesc.pageSaves } </div>
              </div>
              <div className="web-page-info">
                <div className="car-desc-info-label"> Shares </div>
                <div className="web-page-info-entry"> { this.props.carDesc.pageShares } </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default CarDetailUpperInfo;
