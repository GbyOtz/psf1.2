import React, { useState, useEffect } from 'react';
//import ImageCarousel from './Carousel'; // Importa el componente del carrusel
import Footer from '../Footer/Footer';
import './Pagina1.css'

const Pagina1=()=>{
  const [opciones, setOpciones] = useState([""]);//estado para h1
  const frases=['EL HOGAR ES DONDE EMPIEZA LA HISTORIA', 'CONSTRUYENDO SUEÑOS VENDIENDO HOGARES', 'LA PUERTA A TU PROXIMO HOGAR'];
  const [inicio, setInicio]=useState(0);
  useEffect(() => {
    const intervalo= setInterval(()=>{
      setOpciones(frases[inicio]); 
      setInicio((e)=>(e+1)%frases.length);//funcion que realizara setInterval
    }, 3000);//cambia cada 3 seg. tiempo que durara setInterval
    return()=>{
      clearInterval(intervalo);
    };
  });

  return (<div className='pagina1'>
    <h1 className='animacionletra'>{opciones}</h1>
    <img src='imagenes/imagen22.jpg' alt='Imagen'/>
    <Footer></Footer>

  </div>);
}

export default Pagina1;



