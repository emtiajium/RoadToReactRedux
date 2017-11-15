import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class SidebarContent extends Component {
  render() {
    /**
     * here importing `Router` is necessary
     * otherwise `NavLink` won't work
     * error message: You should not use <Route> or withRouter() outside a <Router>
     * Note: as this component's used in main.component
     * and there is Router
     * so here it's useless
     */
    let element = (
      <ul className="nav">
        <li>
          <NavLink to='/user'>User</NavLink>
        </li>
        <li>
          <NavLink to='/user_info'>User Info</NavLink>
        </li>
      </ul>
    );
    return element;
  }
}

export default SidebarContent;
