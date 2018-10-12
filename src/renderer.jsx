import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Ui from './ui';

function render() {
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <Ui />
    </Provider>,
    document.getElementById('root'), // eslint-disable-line no-undef
  );
}

if (module.hot) {
  module.hot.accept(render);
}
render();
