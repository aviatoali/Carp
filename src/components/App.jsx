import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import Header from './Header';
import Footer from './Footer';
import CarDetail from './CarDetail';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        <Header />
        <CarDetail />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
