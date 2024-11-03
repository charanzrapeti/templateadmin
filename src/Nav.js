// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">Dashboard</Link>
      <Link to="/history">History</Link>
      <Link to="/report">Report</Link>
      <Link to="/userdata">User Data</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default Nav;
