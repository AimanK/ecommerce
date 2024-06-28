import React from 'react'
import Footer from '../layout/Footer.jsx';
import Card from '../layout/Card.jsx';
import lampImage from '../images/floor-lamp.jpg';

function Lighting() {
  return (
    <div class="container mt-4">
    <div class="d-flex flex-row flex-wrap">
            <Card image={lampImage} />
            <Card image={lampImage}/>
            <Card image={lampImage}/>
            <Card image={lampImage}/>
            <Card image={lampImage}/>
            <Card image={lampImage}/>
            <Card image={lampImage}/>
            <Card image={lampImage}/>
            <Card image={lampImage}/>
            <Card image={lampImage}/>
            <Card image={lampImage}/>
            <Card image={lampImage}/>
     </div>

            <Footer />
    </div>
  )
}

export default Lighting