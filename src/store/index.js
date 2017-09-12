
const {createStore} = require('redux');
const reducer = require('./counter-reducer');

const store = createStore(reducer);
module.exports = store;

if (module.hot) {
  module.hot.accept(() => {
    const nextReducer = require('./counter-reducer');
    store.replaceReducer(nextReducer);
    module.exports = store;
  });
}
