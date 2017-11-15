import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './style/importStyle';
import MainComponent from './components/main.component';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();

render(
  <Provider store={store}>
    <MainComponent/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
