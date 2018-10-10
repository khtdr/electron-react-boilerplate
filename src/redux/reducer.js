const Types = require('./constants');

module.exports = function counter(state = 0, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
