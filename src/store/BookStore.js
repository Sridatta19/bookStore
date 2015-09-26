
import {createStore} from 'redux';
import storeApp from '../reducers/index';

export default function configureStore(initialState) {
  const store = createStore(storeApp, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
