import React from 'react'
import Footer from '../layout/Footer.jsx';
import Card from '../layout/Card.jsx';
import bedImage from '../images/bed.jpg';

function Beds() {
  return (
    <div class="container mt-4">
    <div class="d-flex flex-row flex-wrap">
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
            <Card image={bedImage} />
     </div>

            <Footer />
    </div>

  )
}

export default Beds