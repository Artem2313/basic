import React from 'react';
import { connect } from 'react-redux';
import * as calculationAction from '../../redux/calculation/calculationAction';

const Counter = ({ value, onIncrement, onDecrement, onMultiply, onDivide }) => {
  return (
    <div>
      <p>Current number {value}</p>
      <button type="button" onClick={onIncrement}>
        Increase
      </button>
      <button type="button" onClick={onDecrement}>
        Decrease
      </button>
      <button type="button" onClick={onMultiply}>
        Multiply
      </button>
      <button type="button" onClick={onDivide}>
        Divide
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.value,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(calculationAction.increment(5)),
  onDecrement: () => dispatch(calculationAction.decrement(5)),
  onMultiply: () => dispatch(calculationAction.multiply(5)),
  onDivide: () => dispatch(calculationAction.divide(5)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
