const connect = require('react-redux').connect;
const actions = require('./actions');

module.exports = ui => connect(
  state => ({ counter: state }),
  actions,
)(ui);

