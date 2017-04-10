import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

//To-Do: Reference this properly using webpack to bundle css module and scope it, or some other CSS loader
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.css';

class MobileImageGallery extends Component {
  render() {
    return (
      <div className="mobile-image-scroller">
        <Carousel showArrows={false} showThumbs={false} showArrows={true} showStatus={false}
        >
          <div>
            <img
              src={this.props.carDesc.imageLink1}
              alt="carPic 1"
            />
          </div>
          <div>
            <img
              src={this.props.carDesc.imageLink2}
              alt="carPic 2"
            />
          </div>
          <div>
            <img
              src={this.props.carDesc.imageLink3}
              alt="carPic 3"
            />
          </div>
          <div>
            <img
              src={this.props.carDesc.imageLink4}
              alt="carPic 4"
            />
          </div>
          <div>
            <img
              src={this.props.carDesc.imageLink5}
              alt="carPic 5"
            />
          </div>
          <div>
            <img
              src={this.props.carDesc.imageLink6}
              alt="carPic 6"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default MobileImageGallery;
