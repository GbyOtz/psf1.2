// Pagina3.js
import React from 'react';
import "./pagina3.css";
import Footer from '../Footer/Footer';

const Contactos=()=>{
  return(
    <div className='card'>
        <div>
          <h3>MISION</h3>
          <p>
          Crear soluciones para mejorar la vida de la gente, y si es necesario, re-inventar las reglas de juego para lograrlo. 
          Logramos nuestro objetivo a través de la tecnología, permitiéndonos llegar a los que más nos necesitan y lo hacemos 
          desde Bolivia porque somos iguales o mejores que cualquier otro, así que mejor no nos subestimen.
          </p>
        </div>
        <div>
          <h3>VISIÓN</h3>
          <p>
          Somos innovadores y disruptivos por naturaleza. Nos impulsa la pasión por crear nuevos productos y soluciones digitales 
          con la convicción de que la tecnología debe transformar y mejorar la vida de las personas. Definimos estándares de nivel 
          internacional y trabajamos focalizados en siempre mejorar para superarnos y crear valor duradero. Creemos en Bolivia, 
          en los principios de equidad e inclusión y que todos tienen el derecho a acceder a servicios y tecnología de clase mundial.
          </p>
        </div>
        <div>
          <h3>Contacto</h3>
          <div>
            
            Tu Camino a Casa <br/>
            
            La Paz: San Miguel, Edif. Centro Damar1315<br/>
           
            Santa Cruz: Av. Ovidio Barbery, Torre La Salle <br/> 
           
            Atención al Cliente: 788-50405  <br/>
           
            info@ultracasas.com  <br/>
            
            www.ultracasas.com  <br/>
         
          </div>
        </div>
        <Footer/>
      </div>
  )
}
    
      
    

export default Contactos;

