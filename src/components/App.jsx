import React, { Component } from 'react';
import { firebaseApp, carRef, uploadRef } from '../firebase';
import Header from './Header';
import CarDetail from './CarDetail';
import Footer from './Footer';

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
      this.setState({
          carDesc: cars[0]
        })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <CarDetail carDesc={this.state.carDesc} />
        <Footer />
      </div>
    );
  }
}

export default App;
