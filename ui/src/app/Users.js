import React, { useRef, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getExpirationDate } from '../common/helper';
import './Split.css';

function Users() {
    const [users, setUsers] = useState(['']); // Initialize with an empty user

    const handleAddUser = () => {
        if (users.length < 5) {
            setUsers([...users, '']); // Add an empty user to the list
        }
    };

    const handleUserChange = (index, value) => {
        const updatedUsers = [...users];
        updatedUsers[index] = value;
        setUsers(updatedUsers);
    };

    const handleSubmit = () => {
        Cookies.set('users', JSON.stringify(users), { expires: getExpirationDate() });
        window.location.href = '/split';
    };

    return (
        <div className="row">
            <div className="col-sm-12 p-3">
                {users.map((user, index) => (
                    <div key={index} className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter user's name"
                            value={user}
                            onChange={(e) => handleUserChange(index, e.target.value)}
                        />
                    </div>
                ))}
                <div class="row">
                    <div class="col-6">
                        <button className="btn btn-primary" onClick={handleAddUser} disabled={users.length >= 5}>
                            Add User
                        </button>
                    </div>
                    <div class="col-6">
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
