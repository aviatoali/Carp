import React, { Component } from 'react';
import '../stylesheets/CarDetail.css';

class CarDetailImageGallery extends Component {

  render(){
    return(
      <div className="gallery-bar">
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 1)}>
          <img className="gallery-image" src={require("../images/fiat1.png")} />
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 2)}>
          <img className="gallery-image" src={require("../images/fiat2.png")} />
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 3)}>
          <img className="gallery-image" src={require("../images/fiat3.png")} />
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 4)}>
          <img className="gallery-image" src={require("../images/fiat4.png")} />
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 5)}>
          <img className="gallery-image" src={require("../images/fiat5.png")} />
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 6)}>
          <img className="gallery-image" src={require("../images/fiat6.png")} />
        </div>
      </div>
    )
  }
}

export default CarDetailImageGallery;
