import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './style/importStyle';
import Routes from './routes';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();

render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('page-content')
);

registerServiceWorker();
