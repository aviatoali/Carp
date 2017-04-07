import { SET_CAR_DETAIL } from '../constants';

let cars = {
  cityMpg: null,
  cylinders: null,
  engine: null,
  highwayMpg: null,
  id: null,
  itemNumber: null,
  maximumPrice: null,
  minimumPrice: null,
  name: null,
  saves: null,
  shares: null,
  views: null,
  vinNumber: null,
  year: null
}

export default (state = [], action) => {
  switch(action.type) {
    case SET_CAR_DETAIL:
      const { cityMpg, cylinders, engine, highwayMpg, id, itemNumber, maximumPrice, minimumPrice, name, saves, shares, views, vinNumber, year } = action;
      cars = {
        cityMpg,
        cylinders,
        engine,
        highwayMpg,
        id,
        itemNumber,
        maximumPrice,
        minimumPrice,
        name,
        saves,
        shares,
        views,
        vinNumber,
        year
      }
      return cars;
    default:
      return state;
  }
}
