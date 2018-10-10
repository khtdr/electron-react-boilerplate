
const { createStore } = require('redux');
const reducer = require('./reducer');

/* eslint-disable no-undef,no-underscore-dangle */
const store = createStore(reducer, /* preloaded state, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable no-undef,no-underscore-dangle */

module.exports = store;

if (module.hot) {
  module.hot.accept(() => {
    // eslint-disable-next-line global-require
    store.replaceReducer(require('./reducer'));
  });
}
