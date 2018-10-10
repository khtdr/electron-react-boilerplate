const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');

const render = () => {
  /*
  let AppContainer = props => props.children;
  if (false && process.env.NODE_ENV === 'development') {
    AppContainer = require('react-hot-loader').AppContainer;
  }
  */
  const store = require('./redux/store');
  const Ui = require('./ui');
  ReactDOM.render(
    //<AppContainer>
      <Provider store={store}>
        <Ui />
      </Provider>
    //</AppContainer>
    , document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept(render);
}

render();
