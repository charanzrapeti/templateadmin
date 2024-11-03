import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="searchbar2">
        <input type="text" placeholder="Search" />
        <div className="searchbtn"></div>
      </div>
      <div className="report-container">
        <div className="report-header">
          <h1 className="recent-Articles">User Data Log</h1>
          <button className="view">View All</button>
        </div>
        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">User Name</h3>
            <h3 className="t-op">Emp ID</h3>
            <h3 className="t-op">Images</h3>
            <h3 className="t-op">Status</h3>
          </div>
          {/* Add items or data here */}
        </div>
      </div>
    </div>
  );
};

export default Main;
