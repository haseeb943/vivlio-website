import React from "react";
// import img1 from '../iamges/img1.jpg';
// import img2 from '../iamges/img.jpeg';
// import img3 from '../iamges/img3.jpg';
import img1 from '../iamges/b11.jpg';
import img2 from '../iamges/b12.jpg';
import img3 from '../iamges/b13.jpg';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={1000}>
        <img height="400px"
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Welcome</h1>
          <p style={{fontSize:"20px", color:"black", fontWeight:'bold'}}>Everything for comfortable buying/selling of your favorite books.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img height="400px"
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Share Your Books</h1>
          <p style={{fontSize:"20px", color:"black", fontWeight:'bold'}}>Share Your Books With different Kind of People.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="400px"
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Easy Explore</h1>
          <p style={{fontSize:"20px", color:"black", fontWeight:'bold'}}>Easy explore by all categories and authors from all over the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;