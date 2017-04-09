import React, { Component } from 'react';
import '../stylesheets/CarDetail.css';

class CarDetailImageGallery extends Component {

  render(){
    return(
      <div className="gallery-bar">
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 1)}>
          <img className="gallery-image" src={require("../images/fiat1.png")} alt="carPic 1"/>
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 2)}>
          <img className="gallery-image" src={require("../images/fiat2.png")} alt="carPic 2"/>
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 3)}>
          <img className="gallery-image" src={require("../images/fiat3.png")} alt="carPic 3"/>
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 4)}>
          <img className="gallery-image" src={require("../images/fiat4.png")} alt="carPic 4"/>
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 5)}>
          <img className="gallery-image" src={require("../images/fiat5.png")} alt="carPic 5"/>
        </div>
        <div className="gallery-bar-frame" onClick={this.props.swapMainImage.bind(this, 6)}>
          <img className="gallery-image" src={require("../images/fiat6.png")} alt="carPic 6"/>
        </div>
      </div>
    )
  }
}

export default CarDetailImageGallery;
