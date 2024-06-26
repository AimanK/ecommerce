import React from 'react'
import Footer from '../layout/Footer.js';
import Card from '../layout/Card.js';
import chairImage from '../images/armchair.jpg';

function Chairs() {
  return (
    <div class="container mt-4">
    <div class="d-flex flex-row flex-wrap">
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
            <Card image={chairImage} />
     </div>

            <Footer />
    </div>

  )
}

export default Chairs