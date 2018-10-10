
const { createStore } = require('redux');
const reducer = require('./reducer');

module.exports = function configureStore() {
  const store = createStore(
    reducer, /* preloaded state, */
    // eslint-disable-next-line no-undef,no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  if (module.hot) {
    module.hot.accept(() => {
      console.log('replacing root reducer');
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducer'));
    });
  }
  return store;
};
