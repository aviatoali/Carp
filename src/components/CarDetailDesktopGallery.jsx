import React, { Component } from 'react';

class CarDetailDesktopGallery extends Component {
  render() {
    return (
      <div id="gallery-row">
        <div className="gallery-bar" onClick={this.props.swapMainImage.bind(this, 'One')}>
          <img className="gallery-bar-slot" src={this.props.carDesc.imageOne} />
        </div>
        <div className="gallery-bar" onClick={this.props.swapMainImage.bind(this, 'Two')}>
          <img className="gallery-bar-slot" src={this.props.carDesc.imageTwo} />
        </div>
        <div className="gallery-bar" onClick={this.props.swapMainImage.bind(this, 'Three')}>
          <img className="gallery-bar-slot" src={this.props.carDesc.imageThree} />
        </div>
        <div className="gallery-bar" onClick={this.props.swapMainImage.bind(this, 'Four')}>
          <img className="gallery-bar-slot" src={this.props.carDesc.imageFour} />
        </div>
        <div className="gallery-bar" onClick={this.props.swapMainImage.bind(this, 'Five')}>
          <img className="gallery-bar-slot" src={this.props.carDesc.imageFive} />
        </div>
        <div className="gallery-bar" onClick={this.props.swapMainImage.bind(this, 'Six')}>
          <img className="gallery-bar-slot" src={this.props.carDesc.imageSix} />
        </div>
      </div>
    )
  }
}

export default CarDetailDesktopGallery;
