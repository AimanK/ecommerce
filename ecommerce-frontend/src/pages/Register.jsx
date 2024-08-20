import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext'; // Adjust the path if needed

function Register() {
  let navigate = useNavigate();
  const { signIn } = useAuth(); // Use the signIn method from AuthContext

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const { username, email, password, password_confirmation } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/v1/users', {
        user: {
          username,
          email,
          password,
          password_confirmation
        }
      });
      
      // Optionally, you could also handle authentication here if needed
      signIn(); // Set the user as signed in

      navigate('/'); // Redirect to home page or profile page after successful registration
    } catch (error) {
      console.error("There was an error registering the user!", error);
      // Handle errors here, e.g., show an error message
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to the root
  };

  return (
    <body className="bg-dark d-flex align-items-center justify-content-center min-vh-100">
      <main className="form-signin w-100 m-auto" style={{ maxWidth: '400px' }}>
        <form onSubmit={handleSubmit} className="bg-secondary">
          <img className="mb-4" src="http://www.w3.org/2000/svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal text-white">Register</h1>
          <div className="m-3">
            <input
              type="text"
              className="form-control bg-secondary text-white"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </div>
          <div className="m-3">
            <input
              type="email"
              className="form-control bg-secondary text-white"
              placeholder="Email address"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="m-3">
            <input
              type="password"
              className="form-control bg-secondary text-white"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className="m-3">
            <input
              type="password"
              className="form-control bg-secondary text-white"
              placeholder="Confirm Password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={onInputChange}
            />
          </div>
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-dark w-50 py-2 me-1" type="button" onClick={handleBack}>Back</button>
            <button className="btn btn-primary w-50 ms-1 py-2" type="submit">Submit</button>
          </div>
          <p className="mt-5 mb-3 text-white">© 2024-2025</p>
        </form>
      </main>
    </body>
  );
}

export default Register;
