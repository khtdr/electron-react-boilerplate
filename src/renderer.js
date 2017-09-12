const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./store');

const render = () => {
  let AppContainer = props => props.children;
  if (process.env.NODE_ENV === 'development') {
    AppContainer = require('react-hot-loader').AppContainer;
  }
  const {Provider} = require('react-redux');
  const ActionableStoreApp = require('./actions');
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ActionableStoreApp />
      </Provider>
    </AppContainer>
    , document.getElementById('root'));
};
if (module.hot) {
  module.hot.accept(render);
}
render();
