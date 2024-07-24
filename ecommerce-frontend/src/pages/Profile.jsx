import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; // Import the CSS file

const Profile = () => {
  const { user, loading } = useContext();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    if (user) {
      setUsername(user.username || '');
      setEmail(user.email || '');
      setBio(user.bio || '');
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    console.log("Profile updated:", { username, email, bio, password });
    try {
      await axios.put(`/api/users/${user.id}`, {
        picture: user.picture,
        username: username,
        email: email,
        bio: bio,
        password: password,
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
      <div className="form-container bg-dark">
        <form onSubmit={handleUpdateProfile}>
          <div className="profile-image-container">
            <img src={user.picture} alt="Profile" className="profile-image" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputUsername1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername1"
              aria-describedby="usernameHelp"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputBio1">Bio</label>
            <textarea
              className="form-control"
              id="exampleInputBio1"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Save password</label>
          </div>
          <div className="button-container">
            <Link to="/"><button type="button" className="btn btn-danger">Back</button></Link>
            <button type="submit" className="btn btn-primary">Update Profile</button>
          </div>
        </form>
      </div>
    )
  );
};

export default Profile;
