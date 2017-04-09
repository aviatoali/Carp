import React, { Component } from 'react';
import CarDetailUpperInfo from './CarDetailUpperInfo';
import CarDetailImageGallery from './CarDetailImageGallery';
import CarDetailLowerInfo from './CarDetailLowerInfo';
import '../stylesheets/CarDetail.css';

class CarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: 1
    }
  }

  swapMainImage(num) {
    this.setState({imageId: num})
  }

  render() {
    return (
      <div>
        <div className="upper-section">
          <img className="main-Image" src={require("../images/fiat" + this.state.imageId + ".png")} alt="Main carPic"/>
          <CarDetailUpperInfo
            imageId={ this.state.imageId }
            carInfo={ this.props.carDesc }
          />
        </div>
        <div className="middle-section">
          <CarDetailImageGallery
              carInfo={ this.props.carDesc }
              swapMainImage={ this.swapMainImage.bind(this) }
           />
        </div>
        <div className="lower-section">
          <CarDetailLowerInfo
            carDesc={this.props.carDesc}
          />
        </div>
      </div>
    )
  }
}

export default CarDetail;
