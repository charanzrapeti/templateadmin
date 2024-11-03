import React, { useState } from 'react';
import './UserDataPage.css'; // Ensure this import is correct

const UserDataPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([
        { username: 'JohnDoe', employeeId: 'E001', image: 'https://randomuser.me/api/portraits/men/75.jpg', status: 'Active' },
        { username: 'JaneSmith', employeeId: 'E002', image: 'https://randomuser.me/api/portraits/men/75.jpg', status: 'Inactive' },
        { username: 'EmilyJones', employeeId: 'E003', image: 'https://randomuser.me/api/portraits/men/75.jpg', status: 'Active' },
    ]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
    };

    const handleDelete = (employeeId) => {
        setUsers(users.filter(user => user.employeeId !== employeeId));
    };

    const handleCreateNew = () => {
        console.log('Creating new user');
    };

    return (
        <div className="user-data-page">
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                />
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleCreateNew}>Create New</button>
            </div>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Employee ID</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.employeeId}>
                            <td>{user.username}</td>
                            <td>{user.employeeId}</td>
                            <td>
                                <div className="image-box">
                                    <img src={user.image} alt={user.username} />
                                </div>
                            </td>
                            <td>{user.status}</td>
                            <td>
                                <button onClick={() => handleDelete(user.employeeId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserDataPage;
