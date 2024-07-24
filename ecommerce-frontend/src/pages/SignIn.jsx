import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/user?email=${encodeURIComponent(email)}`);
      console.log('User data retrieved:', response.data);
      navigate('/profile'); // Redirect to profile page after successful retrieval
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  const handleRegister = () => {
    navigate('/newcustomer'); // Navigate to the register component
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to the root
  };

  return (
    <body className="bg-dark d-flex align-items-center justify-content-center min-vh-100">
      <main className="form-signin w-100 m-auto" style={{ maxWidth: '400px' }}>
        <form onSubmit={handleSubmit} className="bg-secondary position-relative">
        <button type="button" className="btn btn-danger position-absolute top-0 end-0 mt-2 me-2" onClick={handleBack} style={{ width: '10px', height: '20px', borderRadius: '5px' }}>
          <div class="position-absolute top-0 end-0 me-2">
              x
            </div>
        </button>
          <img className="mb-4" src="http://www.w3.org/2000/svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal text-white">Sign In</h1>
          <div className="m-3">
            <input type="email" className="form-control bg-secondary text-white" placeholder="Email address" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="m-3">
            <input type="password" className="form-control bg-secondary text-white" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label text-white" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-dark w-50 py-2 me-1" type="button" onClick={handleRegister}>Register</button>
            <button className="btn btn-primary w-50 ms-1 py-2" type="submit">Submit</button>
          </div>
          <p className="mt-5 mb-3 text-white">© 2024-2025</p>
        </form>
      </main>
    </body>
  );
}

export default SignIn;
