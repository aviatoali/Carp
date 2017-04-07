import React, { Component } from 'react';
import { connect } from 'react-redux';


class CarDetailTop extends Component{

  render(){

    console.log('this.props.cars', this.props.cars);

    return(
      <div>testing</div>
    )
  }
}

function mapStateToProps(state) {
  const { cars } = state;
  return {
    cars
  }
}

export default connect (mapStateToProps, null)(CarDetailTop);
