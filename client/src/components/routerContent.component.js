import React from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

let RouteContent = (
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

export default RouteContent;
