import React from 'react'
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ViewCustomer() {

    const {id} = useParams();

    const [customer, setCustomer] = useState({
        name: "",
        username: "",
        email: "",
    });

    const {name, username, email} = customer;

    useEffect(() => {
        loadCustomer();
    }, []);

    const loadCustomer = async () => {
        const result = await axios.get(`http//localhost:8080/customer/${id}`);
        setCustomer(result.data);
    };


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4">
                <h2 clasName="text-center m-4">Customer Details</h2>

                <div className="card">
                    <div className="card-header">
                        Details of {customer.name} :
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>{customer.name}</b>
                            </li>
                            <li className="list-group-item">
                                <b>{customer.username}</b>
                            </li>
                            <li className="list-group-item">
                                <b>{customer.email}</b>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}