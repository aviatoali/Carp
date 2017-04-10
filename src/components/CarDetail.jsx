import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CarDetailUpperInfo from './CarDetailUpperInfo';
import CarDetailImageGallery from './CarDetailImageGallery';
import CarDetailLowerInfo from './CarDetailLowerInfo';
import MobileImageGallery from './MobileImageGallery';
import '../stylesheets/CarDetail.css';

class CarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesIndex: 0,
      images:[]
    }
  }

  componentDidUpdate() {
    if(!this.state.images.length){
      const imageArray = [];
      const { imageLink1, imageLink2, imageLink3, imageLink4, imageLink5, imageLink6 } = this.props.carDesc;
      imageArray.push( imageLink1, imageLink2, imageLink3, imageLink4, imageLink5, imageLink6 );
      this.setState({images: imageArray});
    }
  }

  swapMainImage(num) {
    this.setState({imagesIndex: num})
  }

  render() {
    return (
      <div>
        <div className="upper-section">
          <img className="main-Image" src={this.state.images[this.state.imagesIndex]} alt="Main carPic"/>
          <MobileImageGallery carDesc={this.props.carDesc} />
          <CarDetailUpperInfo
            imageId={ this.state.imageId }
            carDesc={ this.props.carDesc }
          />
        </div>
        <div className="middle-section">
          <Button bsStyle="success"
                  className="call-us-button"
          >
            CALL US
          </Button>
          <CarDetailImageGallery
              carDesc={ this.props.carDesc }
              swapMainImage={ this.swapMainImage.bind(this) }
           />
        </div>
        <div className="lower-section">
          <CarDetailLowerInfo
            carDesc={this.props.carDesc}
          />
        </div>
      </div>
    );
  }
}

export default CarDetail;
