const React = require('react');
const styled = require('styled-components').default;
const { connect } = require('react-redux');
const actions = require('../redux/actions');

const CounterButton = styled.button`
  padding: 6px 16px;
`;

module.exports = connect(
  state => ({ counter: state }),
  actions,
)(props => (
  <div>
    <h1>Counter: {props.counter}</h1>
    <CounterButton onClick={props.increment}>Increment</CounterButton>
  </div>
));
