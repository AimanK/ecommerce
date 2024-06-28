import React, { useState , useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'; 

export default function CustomerHome() {

    const [customers, setCustomers] = useState([]);


    useEffect(() => {
        loadCustomers();
    }, [] );


    const loadCustomers=async() => {
        const result =await axios.get("http://localhost:8080/customers");
        setCustomers(result.data)
    }


    return (
      <div className="container">
          <div className="py-4">
          <table className="table border shadow">
          <thead>
              <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              </tr>
          </thead>
          <tbody>
          {
                customers.map((customer,index)=>(
                    <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{customer.name}</td>
                    <td>{customer.username}</td>
                    <td>{customer.email}</td>
                    <td>
                        <Link to={`/user/${customer.id}`} className="btn btn-primary mx-2">View </Link>
                        <button className="btn btn-outline-primary mx-2">Edit</button>
                        <button className="btn btn-danger mx-2">Delete</button>
                    </td>
                    </tr>
                ))
            }
          </tbody>
          </table>
          </div>
      </div>
    )
  }