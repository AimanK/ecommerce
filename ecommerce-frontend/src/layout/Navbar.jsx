import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isAuthenticated, user } = useAuth0();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-secondary dropdown">
      

        <div className="container-fluid">
        <Link class="py-2" href="#" aria-label="Product" to="/">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Ecommerce</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
        </Link>
          <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

            
          <label class="dropdown navbar-dark bg-secondary">

          <div class="dd-button" onClick={handleToggle}>
                Shop
          </div>

              <input type="checkbox" class="dd-input" id="test" checked={isOpen}></input>

              <ul class="dd-menu">
              <Link to="/"><li onClick={handleLinkClick}>Home</li></Link>
              <Link to="/lighting"><li onClick={handleLinkClick}>Lighting</li></Link>
              <Link to="/chairs"><li onClick={handleLinkClick}>Chairs</li></Link>
              <Link to="/tables"><li onClick={handleLinkClick}>Tables</li></Link>
              <Link to="/beds"><li onClick={handleLinkClick}>Beds</li></Link>
              <Link to="/arearugs"><li onClick={handleLinkClick}>Area Rugs</li></Link>
              <Link to="/decor"><li style={{borderBottom: "none"}} onClick={handleLinkClick}>Decor</li></Link>
              </ul>

          </label> 

          <Link class="py-2 d-none d-md-inline-block text-white" to="/aboutus">About Us</Link>
          <Link class="py-2 d-none d-md-inline-block text-white" to="/yourcart">Cart</Link>
          {isAuthenticated  && <Link class="py-2 d-none d-md-inline-block text-white" to="/profile">Profile</Link>}


          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>

      </nav>
    </div>
  )
}