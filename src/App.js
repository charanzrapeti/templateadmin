// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import History from './HistoryPage';
import Report from './ReportPage';
import UserData from './UserDataPage';
import Settings from './SettingsPage';
import Logout from './LogoutPage';
import './App.css';

const App = () => {
  return (
    <Router>
      {/* Header component */}
      <Header />

      {/* Sidebar Navigation */}
      <Nav />

      {/* Main content area */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Main />} />         {/* Main route */}
          <Route path="/history" element={<History />} />    {/* History route */}
          <Route path="/report" element={<Report />} />      {/* Report route */}
          <Route path="/userdata" element={<UserData />} />  {/* User Data route */}
          <Route path="/settings" element={<Settings />} />  {/* Settings route */}
          <Route path="/logout" element={<Logout />} />      {/* Logout route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
