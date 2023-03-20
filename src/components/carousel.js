import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Images/1.png";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";

function Carouselshow() {
  return (
    <Carousel className="caraousel-image">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 caraousel-image"
          src={img1}
            alt="First slide" style={{height:"25em"}}
        />
        <Carousel.Caption>
          <h3>About Consulting and Technology</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block w-100"
          src={img2}
            alt="First slide" style={{height:"25em"}}
        />
        <Carousel.Caption>
          <h3>About EntreprenuerShip</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={img3}
            alt="First slide" style={{height:"25em"}}
        />
        <Carousel.Caption>
          <h3>About CAT</h3>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselshow;