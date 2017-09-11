const React = require('react');
const ReactDOM = require('react-dom');
const {AppContainer} = require('react-hot-loader');
const {createStore} = require('redux');
const counter = require('./reducer/counter');
const store = createStore(counter);

const render = () => {
  const {Provider} = require('react-redux');
  const App = require('./ui/containers/App.jsx');
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
    , document.getElementById('root'));
};
render();
if (module.hot) { module.hot.accept(render); }

