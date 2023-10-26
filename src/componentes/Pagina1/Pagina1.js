import React, { useState, useEffect } from 'react';
//import ImageCarousel from './Carousel'; // Importa el componente del carrusel
import Footer from '../Footer/Footer';
import './Pagina1.css'


const Option1 = () => {
  const [text, setText] = useState(''); // Estado local para el contenido del h1
  const words = ['EL HOGAR ES DONDE EMPIEZA LA HISTORIA', 'CONSTRUYENDO SUEÑOS VENDINDO HOGARES', 'LA PUERTA A TU PRXIMO HOGAR']; // Lista de textos a mostrar
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(words[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Cambia el texto cada 3 segundos

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className='Option1'>
      <h1 className='typing-animation'>{text}</h1>
      <img src='imagenes/imagen11.jpg' alt='Imagen' />
      <Footer />
    </div>
  );
};

export default Option1;

