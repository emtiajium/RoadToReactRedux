/**
 * Created by emtiaj on 10/17/17.
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import UserComponent from './components/user.component';
import UserInfoComponent from './components/userInfo.component';

class AllRoutes extends Component {
  render () {
    let element = (
      <Router>
        <div className="row">
          <div className="col-sm-3">
            <ul className="nav">
              <li>
                <NavLink to='/user'>User</NavLink>
              </li>
              <li>
                <NavLink to='/user_info'>User Info</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-9">
            <Route path='/user' component={UserComponent} />
            <Route path='/user_info' component={UserInfoComponent} />
          </div>
        </div>
      </Router>
    );
    return element;
  }
}

export default AllRoutes;