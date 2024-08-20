import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext'; // Use the AuthContext
import '../App.css'; // Import the CSS file

function Profile() {
  let navigate = useNavigate();
  const { user, loading } = useAuth(); // Get user data from context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    console.log("User data:", user);
    if (user) {
      setUsername(user.username || '');
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      alert("Passwords do not match. Please try again");
      return;
    }

   
    try {
      await axios.put(`http://localhost:3001/api/v1/users/${user.id}`, {
        user : {
          username: username,
          password: password,
          password_confirmation: passwordConfirmation
        }
      });
      console.log('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    user && (
      <div className="form-container bg-dark d-flex align-items-center justify-content-center min-vh-100">
        <main className="form-signin w-100 m-auto" style={{ maxWidth: '400px' }}>
          <form onSubmit={handleUpdateProfile} className="bg-secondary p-4 rounded">
            <h1 className="h3 mb-3 fw-normal text-white">Update Profile</h1>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-white">Username</label>
              <input
                type="text"
                className="form-control bg-secondary text-white"
                id="username"
                aria-describedby="usernameHelp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-white">Password</label>
              <input
                type="password"
                className="form-control bg-secondary text-white"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordConfirmation" className="form-label text-white">Confirm Password</label>
              <input
                type="password"
                className="form-control bg-secondary text-white"
                id="passwordConfirmation"
                placeholder="********"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between">
              <Link to="/"><button type="button" className="btn btn-danger w-50 py-2 me-1">Back</button></Link>
              <button type="submit" className="btn btn-primary w-50 ms-1 py-2">Update Profile</button>
            </div>
          </form>
        </main>
      </div>
    )
  );
}

export default Profile;
