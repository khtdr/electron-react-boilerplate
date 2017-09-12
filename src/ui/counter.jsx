const React = require('react');

module.exports = props => (
  <div>
    <h1>Counter: {props.counter}</h1>
    <button onClick={props.increment}>Increment</button>
  </div>
);
