import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carRef } from '../firebase';
import { setCarDetail } from '../actions';

class CarDetail extends Component{

  componentWillMount(){
      carRef.on('value', snap => {
        let cars = [];
        snap.forEach(car => {
          const { cityMpg, cylinders, engine, highwayMpg, id, itemNumber, maximumPrice, minimumPrice, name, saves, shares, views, vinNumber, year } = car.val();
          cars.push( {cityMpg, cylinders, engine, highwayMpg, id, itemNumber, maximumPrice, minimumPrice, name, saves, shares, views, vinNumber, year } )
        })
        this.props.setCarDetail(cars);
      })
  }
  render(){
    console.log('this.props.cars', this.props.cars);
    return(
      <div>
        <div>
          Top Half
        </div>
        <div>
          Middle Photo Area
        </div>
        <div>
          Bottom Half
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { cars } = state;
  return{
    cars
  }
}

export default connect(mapStateToProps, { setCarDetail })(CarDetail);
