import React from 'react'
import Footer from '../layout/Footer.jsx';
import Card from '../layout/Card.jsx';
import decorImage from '../images/decor.jpg';

function Decor() {
  return (
    <div class="container mt-4">
    <div class="d-flex flex-row flex-wrap">
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
            <Card image={decorImage} />
     </div>

            <Footer />
    </div>
  )
}

export default Decor