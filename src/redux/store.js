import * as Redux from 'redux';
import reducer from './reducer';

let middleware = null;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const logger = require('redux-logger').createLogger;
  middleware = Redux.applyMiddleware(logger({ collapsed: true }));
}

module.exports = function configureStore() {
  const store = Redux.createStore(reducer, middleware);
  if (module.hot) {
    module.hot.accept(() => {
      const nextReducer = require('./reducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};
