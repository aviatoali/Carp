import React, { Component } from 'react';
import Header from './Header';
import CarDetail from './CarDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carInfo: {}
    }
  }

  componentWillMount() {
    this.setState({
      carInfo: {id: 1,
                pageViews: 20,
                name: 'Fiat Abarth',
                year: 2017,
                mileage: 1000,
                priceMin: '8,500',
                price_max: '9,000',
                vinNumber: '3GNDA13D96S631406',
                itemNumber: '1395P',
                cylinders: 'L4',
                cityMpg: 20,
                highwayMpg: 25,
                engine: 1.3,
                color: 'blue',
                doors: 2,
                seating: 2,
                condition: 'good',
                imageId: 1,
                shares: 14,
                saves: 7
              }
    })
  }
  render() {
      console.log('this.state.carInfo', this.state.carInfo);
    return (
      <div>
        <Header />
        <CarDetail carInfo={this.state.carInfo} />
      </div>
    )
  }
}

export default App;
