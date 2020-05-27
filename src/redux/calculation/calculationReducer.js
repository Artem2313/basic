import actionTypes from '../actionTypes';

const calculationReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    case actionTypes.MULTIPLY:
      return state * payload;

    case actionTypes.DIVIDE:
      return state / payload;

    default:
      return state;
  }
};

export default calculationReducer;

/*
const initialState =
{
    value: 0,    
}

*/
