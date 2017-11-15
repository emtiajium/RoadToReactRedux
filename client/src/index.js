import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './style/importStyle';
import SidebarContent from './components/sidebar.component';
import Routes from './routes';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();

render(
  <SidebarContent/>,
  document.getElementById('sidebar-content')
);

render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('page-content')
);

registerServiceWorker();
