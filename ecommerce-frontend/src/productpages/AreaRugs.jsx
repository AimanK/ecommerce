import React from 'react'
import Footer from '../layout/Footer.jsx';
import Card from '../layout/Card.jsx';
import rugImage from '../images/arearug.jpg';

function AreaRugs() {

     const price = "$149.99";

  return (
    <div class="container mt-4">
    <div class="d-flex flex-row flex-wrap">
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
            <Card image={rugImage} price={price} />
     </div>

            <Footer />
    </div>
  )
}

export default AreaRugs