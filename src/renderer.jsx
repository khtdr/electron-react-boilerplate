const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');

const render = () => {
  let AppContainer = props => props.children;
  if (process.env.NODE_ENV === 'development') {
    AppContainer = require('react-hot-loader').AppContainer;
  }
  const store = require('./redux/store');
  const ui = require('./ui');
  const App = require('./redux/connect')(ui);
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
    , document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept(render);
}

render();
