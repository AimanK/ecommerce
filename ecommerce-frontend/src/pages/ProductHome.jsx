import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import heroImage from '../images/hero-image.jpg';
import chairImage from '../images/armchair.jpg';
import homeLampImage from '../images/floor-lamp-home.jpg';
import tableImage from '../images/table.jpg';
import bedImage from '../images/bed.jpg';
import rugImage from '../images/arearug.jpg';
import decorImage from '../images/decor.jpg';
import { Link } from 'react-router-dom';
import Footer from "../layout/Footer.jsx";

function ProductHome() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <main>
        <div className="hero-image position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto pt-5 my-5">
            {isAuthenticated ? (
              <h1 className="display-4 fw-normal text-white">
                Welcome {user.name} <br /> Modern Made Easy
              </h1>
            ) : (
              <h1 className="display-4 fw-normal text-white">
                Urban Nest<br /> Modern Made Easy
              </h1>
            )}
            <p className="lead fw-normal text-white">
              Refresh your home with our latest styles. From fixtures to decor, we have everything you need to give your space the sleek aesthetic that it deserves.
            </p>
            <a className="btn btn-outline-success text-white" href="#shop">Shop Now</a>
          </div>
        </div>
        <div id="shop" className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <Link className="text-white" to="/lighting">
                <u><h2 className="display-5">Lighting</h2></u>
              </Link>
              <p className="lead">let there be light</p>
            </div>
            <div className="lamp-image mx-auto" style={{ backgroundImage: `url(${homeLampImage})`, width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <Link className="text-dark" to="/chairs">
                <u><h2 className="display-5">Chairs</h2></u>
              </Link>
              <p className="lead">sitting in style</p>
            </div>
            <div className="armchair-image mx-auto" style={{ backgroundImage: `url(${chairImage})`, width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <Link className="text-dark" to="/tables">
                <u><h2 className="display-5">Tables</h2></u>
              </Link>
              <p className="lead">gather with love</p>
            </div>
            <div className="table-image bg-dark shadow-sm mx-auto" style={{ backgroundImage: `url(${tableImage})`, width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
          <div className="bg-secondary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <Link className="text-white" to="/beds">
                <u><h2 className="display-5">Beds</h2></u>
              </Link>
              <p className="lead">sweet dreams</p>
            </div>
            <div className="bed-image bg-dark shadow-sm mx-auto" style={{ backgroundImage: `url(${bedImage})`, width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <Link className="text-white" to="/arearugs">
                <u><h2 className="display-5">Area Rugs</h2></u>
              </Link>
              <p className="lead">anchor your space</p>
            </div>
            <div className="rug-image bg-body shadow-sm mx-auto" style={{ backgroundImage: `url(${rugImage})`, width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <Link className="text-dark" to="/decor">
                <u><h2 className="display-5">Decor</h2></u>
              </Link>
              <p className="lead">the finishing touch</p>
            </div>
            <div className="decor-image bg-dark shadow-sm mx-auto" style={{ backgroundImage: `url(${decorImage})`, width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductHome;
