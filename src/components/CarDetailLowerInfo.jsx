import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class CarDetailLowerInfo extends Component {
  //To-Do: find a less brute-force, overly-verbose way of doing this. Note: can't hold glyphicons in array or variable of jsx elements to return, doesn't recognize them.
  renderSafetyStars(num) {
    switch(num) {
      case 0:
        return (
          <div> 0 stars </div>
        );
      case 1:
        return (
          <div>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
          </div>
        );
      case 2:
        return (
          <div>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
          </div>
        );
      case 3:
        return (
          <div>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
          </div>
        );
      case 4:
        return (
          <div>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
          </div>
        );
      case 5:
        return (
          <div>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
            <Glyphicon glyph="star" className="safety-star"> </Glyphicon>
          </div>
        );
      default:
        return(
          <div> No safety info</div>
        );
    }
  }

  render() {
      return (
        <div className="car-desc-bot">
          <div className="car-desc-exterior-group">
            <div className="car-desc-lower-category"> EXTERIOR </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label"> Safety Rating </div>
              <div className="car-desc-lower-entry">
                { this.renderSafetyStars(this.props.carDesc.safetyRating) }
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label"> Paint </div>
              <div className="car-desc-lower-entry">
                { this.props.carDesc.paint }
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label"> Condition </div>
              <div className="car-desc-lower-entry">
                { this.props.carDesc.condition }
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label"> AUX Port Enabled </div>
              <div className="car-desc-lower-entry">
                { this.props.carDesc.auxPort }
              </div>
            </div>
          </div>
          <div className="car-desc-performance-group">
            <div className="car-desc-lower-category"> PERFORMANCE </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label"> Cylinders </div>
              <div className="car-desc-lower-entry">
                { `${ this.props.carDesc.cylinders }-Cyl` }
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label"> City MPG </div>
              <div className="car-desc-lower-entry">
                { `${ this.props.carDesc.cityMpg } MPG` }
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label"> Highway MPG </div>
              <div className="car-desc-lower-entry">
                { `${ this.props.carDesc.highwayMpg } MPG` }
              </div>
            </div>
            <div className="car-desc-lower-rows">
              <div className="car-desc-lower-label"> Engine </div>
              <div className="car-desc-lower-entry">
                { `${ this.props.carDesc.engine } Liter` }
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default CarDetailLowerInfo;
