import React from 'react'
import Footer from '../layout/Footer.jsx';
import Card from '../layout/Card.jsx';
import tableImage from '../images/table.jpg';

function Tables() {
  return (
    <div class="container mt-4">
    <div class="d-flex flex-row flex-wrap">
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
            <Card image={tableImage} />
     </div>

            <Footer />
    </div>
  )
}

export default Tables