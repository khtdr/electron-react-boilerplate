import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Ui from './ui';

const store = configureStore();

function render() {
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
