const Types = require('./constants');

module.exports.increment = function increment() {
  return {
    type: Types.INCREMENT,
  };
};
