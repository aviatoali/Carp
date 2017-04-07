import React, { Component } from 'react';
import '../stylesheets/WebTask.css';

class CarDetailAdditionalInfo extends Component{
  render(){
    return (
      <div className="additional-info-group">
        <div className="exterior-section">
          <div className="exterior-section-heading">
            EXTERIOR
          </div>
          <div className="exterior-section-row">
            <div className="exterior-section-table-key">
              Safety Rating
            </div>
            <div className="exterior-section-table-value">
              {this.props.carDesc.safetyRating}
            </div>
          </div>
          <div className="exterior-section-row">
            <div className="exterior-section-table-key">
              Paint
            </div>
            <div className="exterior-section-table-value">
              {this.props.carDesc.paint}
            </div>
          </div>
          <div className="exterior-section-row">
            <div className="exterior-section-table-key">
              Seating
            </div>
            <div className="exterior-section-table-value">
              {this.props.carDesc.seating}
            </div>
          </div>
          <div className="exterior-section-row">
            <div className="exterior-section-table-key">
              AUX Port
            </div>
            <div className="exterior-section-table-value">
              {this.props.carDesc.auxPort}
            </div>
          </div>
        </div>
        <div className="performance-section">
          <div className="performance-section-heading">
            PERFORMANCE
          </div>
          <div className="performance-section-row">
            <div className="performance-section-table-key">
              Cylinders
            </div>
            <div className="performance-section-table-value">
              {this.props.carDesc.cylinders}
            </div>
          </div>
          <div className="performance-section-row">
            <div className="performance-section-table-key">
              City MPG
            </div>
            <div className="performance-section-table-value">
              {this.props.carDesc.cityMpg + ' MPG'}
            </div>
          </div>
          <div className="performance-section-row">
            <div className="performance-section-table-key">
              HighwayMPG
            </div>
            <div className="performance-section-table-value">
              {this.props.carDesc.highwayMpg + ' MPG'}
            </div>
          </div>
          <div className="performance-section-row">
            <div className="performance-section-table-key">
              Engine
            </div>
            <div className="performance-section-table-value">
              {this.props.carDesc.engine}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CarDetailAdditionalInfo;
