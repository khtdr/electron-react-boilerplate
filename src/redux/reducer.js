const actions = require('./actions');

module.exports = function counter(state = 0, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
