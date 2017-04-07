import React, { Component } from 'react';
import CarDetailSummary from './CarDetailSummary';
import CarDetailMobileCarousel from './CarDetailMobileCarousel';
import CarDetailAdditionalInfo from './CarDetailAdditionalInfo';
import CarDetailDesktopGallery from './CarDetailDesktopGallery';
import '../stylesheets/WebTask.css';

class CarDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      imageNum: 'One',
    };
  }

  swapMainImage(num){
    this.setState({imageNum: num.toLocaleString()})
  }

  render(){
    return(
      <div>
        <img className='main-image' src={"../images/fiat" + this.state.imageNum + ".jpg"} />
        <CarDetailMobileCarousel carDesc={ this.props.carDesc } />
        <CarDetailSummary
            carDesc={ this.props.carDesc }
        />
        <div className='middle-block'>
          <div className="call-bar-mobile">CALL US</div>
          <CarDetailDesktopGallery
            carDesc={ this.props.carDesc}
            swapMainImage= { this.swapMainImage.bind(this) }
          />
          <CarDetailAdditionalInfo
            carDesc={this.props.carDesc}
          />
        </div>
      </div>
    )
  }
}

export default CarDetail;
