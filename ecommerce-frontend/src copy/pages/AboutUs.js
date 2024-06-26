import React from 'react';
import groupImage from '../images/group.jpg';
import Footer from '../layout/Footer.js';
import '../App.css'; // Import the CSS file for styles
import AboutCard from '../layout/AboutCard.js'

function AboutUs() {
  return (
    <div>
      <main className="hero-background">
        <section className="jumbotron text-center bg-transparent">
          <div className="container text-light">
            <h1 className="jumbotron-heading">Album example</h1>
            <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </section>

        <AboutCard />
        <AboutCard />
        <AboutCard />

      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;