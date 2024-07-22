import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
        email: "",
        password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/newcustomer', user);
      navigate('/'); // Redirect to profile page after successful registration
    };

  const handleBack = () => {
    navigate('/'); // Navigate back to the root
  };
  
  return (
    <body className="bg-dark d-flex align-items-center justify-content-center min-vh-100">
      <main className="form-signin w-100 m-auto" style={{ maxWidth: '400px' }}>
        <form onSubmit={(e) => handleSubmit(e)} className="bg-secondary">
          <img className="mb-4" src="http://www.w3.org/2000/svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal text-white">Register</h1>
          <div className="m-3">
            <input type="email" className="form-control bg-secondary text-white" placeholder="Email address" name="email" value={email} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="m-3">
            <input type="password" className="form-control bg-secondary text-white" placeholder="Password" name="password" value={password} onChange={e => onInputChange(e)} />
          </div>
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label text-white" for="flexCheckDefault">
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
