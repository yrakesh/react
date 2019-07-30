import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] :\t', action);
      const result = next(action);
      console.log('[Middleware] next state :\t', store.getState());
      return result;
    }
  }
}

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
