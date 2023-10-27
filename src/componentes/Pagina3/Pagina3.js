// Pagina3.js
import React from 'react';
import './pagina3.css'

function acercaNosotros() {
  return (
    <div className="info">
      <header className="header">
        <h1>CasaNegocios</h1>
      </header>
      <div className="about-us">
        <h2>QUIÉNES SOMOS</h2>
        <p>
          En CasaNegocios, nos dedicamos a crear soluciones que mejoren la calidad de vida de las personas y, si es necesario, a desafiar las reglas convencionales para lograrlo. Lo hacemos a través de la tecnología, lo que nos permite llegar a quienes más nos necesitan. Estamos arraigados en Bolivia porque creemos que somos iguales o incluso mejores que cualquier otro, por lo que no subestimemos nuestro potencial.
        </p>
      </div>
      <div className="mission-vision-values">
        <h2>MISIÓN</h2>
        <p>
          En CasaNegocios, nos dedicamos a crear soluciones que mejoren la calidad de vida de las personas y, si es necesario, a desafiar las reglas convencionales para lograrlo. Lo hacemos a través de la tecnología, lo que nos permite llegar a quienes más nos necesitan. Estamos arraigados en Bolivia porque creemos que somos iguales o incluso mejores que cualquier otro, por lo que no subestimemos nuestro potencial.
        </p>
        <h2>VISIÓN</h2>
        <p>
          En CasaNegocios, la innovación y la disrupción son parte de nuestra naturaleza. Nos motiva la pasión por desarrollar nuevos productos y soluciones digitales con la firme convicción de que la tecnología debe transformar y enriquecer la vida de las personas. Establecemos estándares de nivel internacional y nos esforzamos constantemente por superarnos a nosotros mismos y crear un valor duradero. Creemos en Bolivia, en los principios de equidad e inclusión, y en el derecho de todos a acceder a servicios y tecnología de clase mundial.
        </p>
        <h2>VALORES</h2>
        <ul>
          <li>Integridad y transparencia: Guiamos nuestro comportamiento diario con estos principios.</li>
          <li>Equidad e inclusión: Están en el corazón de nuestro proceso de innovación y creación de nuevos productos y servicios.</li>
          <li>Excelencia: Establecemos estándares exigentes al nivel del mercado internacional y trabajamos incansablemente para mantenerlos y superarlos.</li>
        </ul>
      </div>
      <div className="property-list">
        <h2>¿Es CasaNegocios una inmobiliaria?</h2>
        <p>
          CasaNegocios no es una inmobiliaria; más bien, somos un aliado estratégico de agentes y desarrolladores inmobiliarios que les permite publicar sus ofertas en nuestro portal para llegar a millones de interesados y gestionar sus propiedades.
        </p>
        <h2>CasaNegocios</h2>
        <p>
          Tu Ruta hacia tu Nuevo Hogar
        </p>
        <div className="contact-info">
          <p>La Paz: San Miguel, Edificio Centro Damar 1315</p>
          <p>Santa Cruz: Avenida Ovidio Barbery, Torre La Salle</p>
          <p>Atención al Cliente: 788-50405</p>
          <p>Correo Electrónico: info@casanegocios.com</p>
          <p>Sitio Web: <a href="www.casanegocios.com">www.casanegocios.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default acercaNosotros;

