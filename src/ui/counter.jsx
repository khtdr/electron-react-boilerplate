const React = require('react');
const { connect } = require('react-redux');
const actions = require('../redux/actions');

module.exports = connect(
  state=> ({counter: state}),
  actions
)(props=> (
  <div>
    <h1>Counter: {props.counter}</h1>
    <button onClick={props.increment}>Increment</button>
  </div>
));
