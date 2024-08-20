import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();
  const { isSignedIn, signOut } = useAuth(); // Get isSignedIn and logOut from context
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  const handleSignOut = () => {
    signOut();
    navigate('/');
  }

  return (
    <div>
      <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-secondary dropdown">
        <div className="container-fluid">
          <Link className="py-2" to="/" aria-label="Product">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24">
              <title>Ecommerce</title>
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <label className="dropdown navbar-dark bg-secondary">
            <div className="dd-button" onClick={handleToggle}>
              Shop
            </div>
            <input type="checkbox" className="dd-input" id="test" checked={isOpen} readOnly />
            <ul className="dd-menu">
              <Link to="/"><li onClick={handleLinkClick}>Home</li></Link>
              <Link to="/lighting"><li onClick={handleLinkClick}>Lighting</li></Link>
              <Link to="/chairs"><li onClick={handleLinkClick}>Chairs</li></Link>
              <Link to="/tables"><li onClick={handleLinkClick}>Tables</li></Link>
              <Link to="/beds"><li onClick={handleLinkClick}>Beds</li></Link>
              <Link to="/arearugs"><li onClick={handleLinkClick}>Area Rugs</li></Link>
              <Link to="/decor"><li style={{ borderBottom: "none" }} onClick={handleLinkClick}>Decor</li></Link>
            </ul>
          </label>
          <Link className="py-2 d-none d-md-inline-block text-white" to="/aboutus">About Us</Link>
          <Link className="py-2 d-none d-md-inline-block text-white" to="/yourcart">Cart</Link>
          {isSignedIn ? (
            <>
            <Link className="py-2 d-none d-md-inline-block text-white" to="/profile">Profile</Link>
            <button 
              className="py-2 d-none d-md-inline-block"
              style={{
                color: 'white',
                background: 'none',
                border: 'none',
                padding: '0.5rem 1rem',
                textDecoration: 'none',
              }}
              onClick={handleSignOut}>Sign Out
              </button>
              </>
          ) : (
            <Link className="py-2 d-none d-md-inline-block text-white" to="/sign-in">Sign-In</Link>
          )}
        </div>
      </nav>
    </div>
  );
}
