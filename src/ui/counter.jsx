import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

const Ui = ({ counter, decrement, increment }) => (
  <div>
    <h1>
      Counter:
      {counter}
    </h1>
    <button type="submit" onClick={decrement}>
      Decrement
    </button>
    <button type="submit" onClick={increment}>
      Increment
    </button>
  </div>
);

Ui.propTypes = {
  counter: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ counter: state }),
  actions,
)(Ui);
