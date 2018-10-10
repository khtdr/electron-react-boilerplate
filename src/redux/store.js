
const { createStore } = require('redux');
const reducer = require('./reducer');

const store = createStore(
  reducer, /* preloaded state, */
  // eslint-disable-next-line no-undef,no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

if (module.hot) {
  module.hot.accept(() => {
    // eslint-disable-next-line global-require
    store.replaceReducer(require('./reducer'));
  });
}

module.exports = store;
