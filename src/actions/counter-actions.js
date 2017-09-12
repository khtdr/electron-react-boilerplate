const INCREMENT = 'INCREMENT';
module.exports.INCREMENT = INCREMENT;
module.exports.increment = function increment() {
  return {
    type: INCREMENT,
  };
};
