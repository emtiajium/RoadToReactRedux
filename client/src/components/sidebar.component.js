import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

class SidebarContent extends Component {
  render() {
    /**
     * here importing `Router` is necessary
     * otherwise `NavLink` won't work
     * error message: You should not use <Route> or withRouter() outside a <Router>
     */
    let element = (
      <Router>
        <ul className="nav">
          <li>
            <NavLink to='/user'>User</NavLink>
          </li>
          <li>
            <NavLink to='/user_info'>User Info</NavLink>
          </li>
        </ul>
      </Router>
    );
    return element;
  }
}

export default SidebarContent;
