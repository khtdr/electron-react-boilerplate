const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');

const render = () => {
  // eslint-disable-next-line global-require
  const store = require('./redux/store');
  // eslint-disable-next-line global-require
  const Ui = require('./ui');
  /* eslint-disable no-undef */
  ReactDOM.render(
    <Provider store={store}>
      <Ui />
    </Provider>
    , document.getElementById('root'));
  /* eslint-enable no-undef */
};

if (module.hot) {
  module.hot.accept(render);
}

render();
