import React from 'react'

function Card(props) {
  return (
    <div>
        <div class="card" style={{width: "19rem", margin: "5px"}}>
        <img class="card-img-top" src={props.image} alt="Product Card" style={{height: "402px", width: "302px"}} />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{props.price}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
        </div>
        </div>
    </div>
  )
}

export default Card