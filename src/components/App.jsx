import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import Header from './Header';
import Footer from './Footer';
import CarDetail from './CarDetail';
import { carRef } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carDesc: {},
    };
  }
  componentWillMount() {
      carRef.once("value", function(snapshot){
      this.setState({ carDesc: snapshot.val()});
    }.bind(this));
  }

  signOut() {
    firebaseApp.auth().signOut();
  }

  waitForData(){
    if(Object.keys(this.state.carDesc).length === 0) {
      return(null)
    } else {
      return(
        <CarDetail carDesc={this.state.carDesc} />
      )
    }
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        <Header />
        {this.waitForData()}
        <Footer />
      </div>
    )
  }
}

export default App;
