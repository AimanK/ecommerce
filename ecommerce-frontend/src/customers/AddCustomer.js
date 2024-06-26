import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"


export default function AddCustomer() {


  let navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: "",
    username: "",
    email: "",
  });

  const {name, username, email} = customer;

  const onInputChange= (e) =>
  {
    setCustomer({...customer, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/newcustomer", customer);
    navigate("/");
  };



  return (
    <div className="container">
        <div className="row">
            <div className="mt-5 col-md-6 offset-md-3 border rounded p-4">
                <h2 clasName="text-center m-4">Customer Sign-Up</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input
                    onChange={(e) => onInputChange(e)}
                    value={name}
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">
                        Username
                    </label>
                    <input
                    onChange={(e) => onInputChange(e)}
                    value={username}
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your username"
                    name="username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Email
                    </label>
                    <input
                    onChange={(e) => onInputChange(e)}
                    value={email}
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-outline-danger mx-2">
                    Cancel
                </Link>
              </form>

            </div>
        </div>
    </div>
  )
}