import React, { Component } from 'react';

class CarDetailLowerInfo extends Component {
  render() {
      return (
        <div className="car-desc-bot">
          <div className="car-desc-exterior-group">
            <div className="car-desc-lower-category">
              EXTERIOR
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label">
                Safety Rating
              </div>
              <div className="car-desc-lower-entry">
                4 Stars
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label">
                Paint
              </div>
              <div className="car-desc-lower-entry">
                Brown
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label">
                Condition
              </div>
              <div className="car-desc-lower-entry">
                Excellent
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label">
                AUX Port Enabled
              </div>
              <div className="car-desc-lower-entry">
                Yes
              </div>
            </div>
          </div>
          <div className="car-desc-performance-group">
            <div className="car-desc-lower-category">
              PERFORMANCE
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label">
                Cylinders
              </div>
              <div className="car-desc-lower-entry">
                4-Cyl
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label">
                City MPG
              </div>
              <div className="car-desc-lower-entry">
                30 MPG
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label">
                Highway MPG
              </div>
              <div className="car-desc-lower-entry">
                38 MPG
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label">
                Engine
              </div>
              <div className="car-desc-lower-entry">
                1.4 Liter
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default CarDetailLowerInfo;
