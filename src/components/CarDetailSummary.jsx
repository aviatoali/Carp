import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

class CarDetailSummary extends Component{
  render(){
    return(
      <div className="detail-summary-section">
        <div className="car-name"> {this.props.carDesc.name} </div>
        <div className="detail-summary-table">
          <div className="detail-summary-table-key"> Year </div>
          <div className="detail-summary-table-value"> {this.props.carDesc.year} </div>
          <div className="detail-summary-table-key"> Price Range </div>
          <div className="detail-summary-table-value"> {"$" + this.props.carDesc.minimumPrice.toLocaleString() + " - $" + this.props.carDesc.maximumPrice.toLocaleString()} </div>
          <div className="detail-summary-table-key"> Mileage </div>
          <div className="detail-summary-table-value"> {this.props.carDesc.mileage.toLocaleString() + " miles"} </div>
        </div>
        <div className="detail-summary-section-two">
          <div className="detail-summary-table-key"> {"Item Number : " + this.props.carDesc.item_number} </div>
          <div className="detail-summary-table-key"> {"VIN : " + this.props.carDesc.vin_number}</div>
          <div className="shares-section">
            <div className="share-link"> Share this car </div>
            <Link to={'/app'}><Glyphicon glyph="envelope" className="envelope-icon"></Glyphicon></Link>
          </div>
          <div className="page-info-table">
            <div className="page-info-section">
              <div className="page-info-key">Views</div>
              <div className="page-info-value">{this.props.carDesc.views}</div>
            </div>
            <div className="page-info-section">
              <div className="page-info-key">Saves</div>
              <div className="page-info-value">{this.props.carDesc.saves}</div>
            </div>
            <div className="page-info-section">
              <div className="page-info-key">Shares</div>
              <div className="page-info-value">{this.props.carDesc.shares}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CarDetailSummary;
