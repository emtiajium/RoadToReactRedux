/**
 * Created by emtiaj on 11/15/17.
 */

import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SidebarContent from './sidebar.component';
import Routes from '../routes';

class MainComponent extends Component {
  render() {
    let element = (
      <Router>
        <div className="row">
          <div className="col-sm-3">
            <SidebarContent/>
          </div>
          <div className="col-sm-9">
            <Routes/>
          </div>
        </div>
      </Router>
    );
    return element;
  }
}

export default MainComponent;