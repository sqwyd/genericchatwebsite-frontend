import React from 'react';

import { Link } from 'react-router-dom';

import SiteNavBar from './SiteNavBar';

import './SiteHeader.css';

const SiteHeader = ({ users_connected, users_searching, current_user }) => {
  return <header>
    <h1 className="d-inline"><Link to="/">headertitle</Link></h1>
    <SiteNavBar current_user={current_user}/>
    <div className="users_online">
      <p>{users_connected} connected</p>
      <p>{users_searching} searching</p>
    </div>
  </header>;
};

export default SiteHeader;
