import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../style/HeroBanner.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import poster2 from "../images/poster2.png";
import poster1 from "../images/poster1.png";









function Hero  () {
    return (
    
        <Carousel>
           <Carousel.Item interval={2000}>
              <img
                  className="d-block w-100"
                  src={poster1}
                  alt="livres"
                  
              />
              <Carousel.Caption>
                  <h2 ></h2>
                  
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
              <img
                  className="d-block w-100"
                  src={poster2}
                  alt="Second slide"
              />
              <Carousel.Caption>
                  <h3></h3>
                 
              </Carousel.Caption>
          </Carousel.Item>
          
          
          
        </Carousel>
  
 
)
                                                                       
    
};

export default Hero;