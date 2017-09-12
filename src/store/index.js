
const { createStore } = require('redux');
const reducer = require('./counter-reducer');

/* eslint-disable */
const store = createStore(reducer, /* preloaded state, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

module.exports = store;

if (module.hot) {
  module.hot.accept(() => {
    // eslint-disable-next-line global-require
    const nextReducer = require('./counter-reducer');
    store.replaceReducer(nextReducer);
    module.exports = store;
  });
}
