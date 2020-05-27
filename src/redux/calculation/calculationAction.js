import actionTypes from '../actionTypes';

export const increment = value => ({
  type: actionTypes.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: actionTypes.DECREMENT,
  payload: value,
});

export const multiply = value => ({
  type: actionTypes.MULTIPLY,
  payload: value,
});

export const divide = value => ({
  type: actionTypes.DIVIDE,
  payload: value,
});
