// Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
    <Carousel autoPlay={true} 
    interval={3000} infiniteLoop={true} 

    >
        
      <div>
        <img className='carousel img' src="/imagenes/imagen8.jpg" alt="Imagen 1" />
        <h1>El hogar es donde empieza la historia de tu vida...</h1>

      </div>
      <div>
        <img className='carousel img' src="/imagenes/imagen9.jpg" alt="Imagen 2" />
        <h1>El hogar es donde empieza la historia de tu vida...</h1>
      </div>
      <div>
        <img className='carousel img' src="/imagenes/imagen10.jpg" alt="Imagen 3" />
        <h1>El hogar es donde empieza la historia de tu vida...</h1>
      </div>
      {/* Agrega más imágenes según sea necesario */}
    </Carousel>
    
    </div>
  );
};

export default ImageCarousel;
