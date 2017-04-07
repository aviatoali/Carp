import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class CarDetailMobileCarousel extends Component {

  render() {
    return (
      <div className="image-group">
        <Carousel>
            <img src={this.props.carDesc.imageOne} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
            <img src={this.props.carDesc.imageTwo} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
            <img src={this.props.carDesc.imageThree} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
            <img src={this.props.carDesc.imageFour} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
            <img src={this.props.carDesc.imageFive} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
            <img src={this.props.carDesc.imageSix} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
        </Carousel>
      </div>
    )
  }

}

export default CarDetailMobileCarousel;
