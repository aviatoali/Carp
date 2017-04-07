import { SIGNED_IN, SET_CAR_DETAIL, SET_GOALS, SET_COMPLETED } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export function setCarDetail(cars) {
  const action = {
    type: SET_CAR_DETAIL,
    cars
  }
  return action;
}

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export function setCompleted(completeGoals) {
  const action = {
    type: SET_COMPLETED,
    completeGoals
  }
  return action;
}
