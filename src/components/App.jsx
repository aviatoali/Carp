import React, { Component } from 'react';
import Header from './Header';
import CarDetail from './CarDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carDesc: {}
    }
  }

  componentWillMount() {
    this.setState({
      carDesc: {id: 1,
                pageViews: 20,
                name: 'Fiat 500',
                year: 2017,
                mileage: '143,270',
                minPrice: '5,790',
                maxPrice: '4,920',
                vinNumber: '3C3FFAR9CT386425',
                itemNumber: '1395P',
                cylinders: 4,
                cityMpg: 30,
                highwayMpg: 38,
                engine: 1.4,
                paint: 'Brown',
                condition: 'Excellent',
                pageShares: 14,
                pageSaves: 7,
                safetyRating: 3,
                auxPort: 'Yes',
                imageLink1: 'http://www.cheapusedcars4sale.com/images/Used-Cars-for-Sale/386425/Fiat-500-2012-386425-extra-1.JPG',
                imageLink2: 'http://www.cheapusedcars4sale.com/images/Used-Cars-for-Sale/386425/Fiat-500-2012-386425-extra-2.JPG',
                imageLink3: 'http://www.cheapusedcars4sale.com/images/Used-Cars-for-Sale/386425/Fiat-500-2012-386425-extra-3.JPG',
                imageLink4: 'http://www.cheapusedcars4sale.com/images/Used-Cars-for-Sale/386425/Fiat-500-2012-386425-extra-4.JPG',
                imageLink5: 'http://www.cheapusedcars4sale.com/images/Used-Cars-for-Sale/386425/Fiat-500-2012-386425-extra-8.JPG',
                imageLink6: 'http://www.cheapusedcars4sale.com/images/Used-Cars-for-Sale/386425/Fiat-500-2012-386425-extra-11.JPG'
              }
    })
  }

  render() {
    console.log('this.state.carDesc', this.state.carDesc);
    return (
      <div>
        <Header />
        <CarDetail carDesc={this.state.carDesc} />

      </div>
    );
  }
}

export default App;
