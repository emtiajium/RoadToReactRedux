/**
 * Created by emtiaj on 10/17/17.
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserComponent from './components/user.component';
import UserInfoComponent from './components/userInfo.component';

class AllRoutes extends Component {
  render () {
    let element = (
      <Router>
        <div>
          <Route path='/user' component={UserComponent} />
          <Route path='/user_info' component={UserInfoComponent} />
        </div>
      </Router>
    );
    return element;
  }
}

export default AllRoutes;