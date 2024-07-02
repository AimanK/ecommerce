import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../layout/Footer.jsx";
import AboutCard from '../layout/AboutCard';
import workshopImage from '../images/workshop.jpg';
import aboutHomeImage from '../images/about-home.jpg';
import craftsmanImage from '../images/craftsman.jpg';

const about_descriptions = [
  "Our story began as a couple of craftsmen that dreamed to create inspiring pieces, from a dust-filled barn to your living space, each piece is crafted with intense focus and love.",
  "The best design philosophy is the simplest to us, shapes you can find in nature and colors that resonate deeply with the spirit, we aim to connect with our surroundings harmoniously.",
  "We are skilled craftsmen who utilize industry-leading techniques to build our pieces to the highest standard so that you and your loved ones can rely on their build quality as much as their aesthetic beauty."
];

function AboutUs() {
  return (
    <div>
      <main className="hero-background">
        <section className="jumbotron text-center bg-transparent">
          <div className="container text-light">
            <h1 className="jumbotron-heading">Our Mission<br /> Crafting Contemporary Elegance</h1>
            <p className="lead">
              At Urban Nest, we believe that exceptional spaces are born from the perfect blend of masterful craftsmanship and cutting-edge design.
            </p>
            <p>
              <Link to="/"><a href="#" className="btn btn-primary my-2">Shop our styles</a></Link>
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <AboutCard image={workshopImage} description={about_descriptions[0]} />
              <AboutCard image={aboutHomeImage} description={about_descriptions[1]} />
              <AboutCard image={craftsmanImage} description={about_descriptions[2]} customClass="third-about-card" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
