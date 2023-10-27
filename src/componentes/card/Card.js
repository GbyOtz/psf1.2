import React, { useState } from 'react';
import './Card.css';

function App() {
  const [cards, cambioCards] = useState([]);//iniciamos a cards en vacio
  const [nuevaCard, cambioCard] = useState({ //newcard= nuevaCard setnewcard=cambioCard
    titulo: '',
    imgURL: '',
    comentario: '',
    precio: '',
    ubicacion: '',
    contacto: '',
  });//iniciomos a nueva card con los elementos y sin ningun valor 

  const cambiarCard = () => {//se crea una funcion flecha para asignar los valores para que card tome los valores nuevos valores
    if (nuevaCard.titulo && nuevaCard.imgURL &&  nuevaCard.comentario && nuevaCard.precio && nuevaCard.contacto) {
      cambioCards([...cards, nuevaCard]);// se usan los elementos de propagacion para tomar el objeto completo y cambiar todos los valores
      cambioCard({
        titulo: '',
        imgURL: '',
        comentario: '',
        precio: '',
        ubicacion: '',
        contacto:''
      });
    }
  };

  const cambiarImg = (e) => {
    const imagen = e.target.files[0];//se almacena la informacion de la imagen que se inserte a una variable

    if (imagen) {
      const cargar = new FileReader();//lee el archivo seleccionado por el usuario
      cargar.onload = (e) => {
        cambioCard({ ...nuevaCard, imgURL: e.target.result });//target result contiene la informacion de la img y la almacena en nuevaCard
      };

      cargar.readAsDataURL(imagen);//convierte la img en url
    };
  };

  return (
    <div className="app">
      <h1>GENERA TU PUBLICIDAD</h1>
      <form className="add-card-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            placeholder="¿Qué Vendes/Compras?"
            value={nuevaCard.titulo}
            onChange={(e) => cambioCard({ ...nuevaCard, titulo: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={cambiarImg}
          />
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            placeholder="Descripción de lo que Vendes/Compras"
            value={nuevaCard.comentario}
            onChange={(e) => cambioCard({ ...nuevaCard, comentario: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            placeholder="Precio de lo que Vendes/Compras"
            value={nuevaCard.precio}
            onChange={(e) => cambioCard({ ...nuevaCard, precio: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Contacto:</label>
          <input
            type="number"
            placeholder="Información de contacto"
            value={nuevaCard.contacto}
            onChange={(e) => cambioCard({ ...nuevaCard, contacto: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Ubicación:</label>
          <select
            value={nuevaCard.ubicacion}
            onChange={(e) => cambioCard({ ...nuevaCard, ubicacion: e.target.value })}
            style={{ width: '100%' }}
          >
            <option value="">Selecciona una ubicación</option>
            <option value="La Paz">La Paz</option>
            <option value="Sucre">Sucre</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Oruro">Oruro</option>
            <option value="Beni">Beni</option>
            <option value="Pando">Pando</option>
            <option value="Potosí">Potosí</option>
            <option value="Tarija">Tarija</option>
            <option value="Cochabamba">Cochabamba</option>
          </select>
        </div>
        <button onClick={cambiarCard}>Agregar Tarjeta</button>
      </form>

      <div className="app">
        <h1>PUBLICACIONES</h1>
        <div className="card-list">
          {cards && cards.map((card, index) => (
            <div className="card" key={index}>
               <p className="card-title">{card.titulo}</p>
              <div className="circle-container" style={{ backgroundImage: `url(${card.imgURL})` }}></div>
              <div className='card-details'>{/*rescatando valores insertados*/}
                <p className='card-comment'>Descripcion<br/>{card.comentario}</p>
                <p className='card-price'>Precio: $.{card.precio}</p>
                <p className='card-contact'>Numero de Contacto: {card.contact}</p> 
                <p className='card-location'>Ubicación: {card.ubicacion}/Bolivia.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

