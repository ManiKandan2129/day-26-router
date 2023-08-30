import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carosuel.css'

function Carosuel() {
  return (
    <div>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/carosule-one.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/carosule-two.webp"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/carosule-three.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carosuel