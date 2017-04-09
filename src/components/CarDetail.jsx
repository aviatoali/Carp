import React, { Component } from 'react';
import CarDetailUpperInfo from './CarDetailUpperInfo';
import '../stylesheets/CarDetail.css';

class CarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: 1
    }
    console.log('this.props.carInfo', this.props.carInfo);
  }

  render() {
    return (
      <div>
        <div className="upper-section">
          <img className="main-Image" src={require("../images/fiat" + this.state.imageId + ".png")} />
          <CarDetailUpperInfo
            imageId={this.state.imageId}
            carInfo={ this.props.carInfo }
          />
        </div>
      </div>
    )
  }
}

export default CarDetail;
