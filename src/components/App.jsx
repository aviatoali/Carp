import React, { Component } from 'react';
import { firebaseApp, carRef, uploadRef } from '../firebase';
import Header from './Header';
import CarDetail from './CarDetail';

firebaseApp.auth().signInWithEmailAndPassword("admin@mail.com", "admin1");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carDesc: {
        name: '',
        year: null,
        minPrice: '',
        maxPrice: '',
        mileage: '',
        itemNumber: '',
        vinNumber: '',
        pageViews: null,
        pageShares: null,
        pageSaves: null,
        safetyRating: null,
        paint: '',
        condition: '',
        auxPort: '',
        cylinders: null,
        cityMpg: null,
        highwayMpg: null,
        engine: null,
        imageLink1: '',
        imageLink2: '',
        imageLink3: '',
        imageLink4: '',
        imageLink5: '',
        imageLink6: ''
    }
  }
}

  componentWillMount() {
    carRef.on('value', snap => {
      let cars = [];
      snap.forEach(car => {
        const { name, year, minPrice, maxPrice, mileage, itemNumber, vinNumber, pageViews, pageShares, pageSaves, safetyRating, paint, condition, auxPort, cylinders, cityMpg, highwayMpg, engine, imageLink1, imageLink2, imageLink3, imageLink4, imageLink5, imageLink6 } = car.val();
        cars.push({ name, year, minPrice, maxPrice, mileage, itemNumber, vinNumber, pageViews, pageShares, pageSaves, safetyRating, paint, condition, auxPort, cylinders, cityMpg, highwayMpg, engine, imageLink1, imageLink2, imageLink3, imageLink4, imageLink5, imageLink6 });
      })
      console.log("cars", cars);
      const { name } = cars[0];
      console.log('name', name);
      this.setState({
          carDesc: cars[0]
        })
      console.log('this.state', this.state);
      console.log('this.state.name', this.state.name);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <CarDetail carDesc={this.state.carDesc} />
      </div>
    );
  }
}

export default App;
