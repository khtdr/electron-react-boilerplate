const React = require('react');
const ReactDOM = require('react-dom');
const {createStore} = require('redux');
const counter = require('./reducer/counter');
const store = createStore(counter);

const render = () => {
  let AppContainer = props => props.children;
  if (process.env.NODE_ENV === 'development') {
    AppContainer = require('react-hot-loader').AppContainer;
  }
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

