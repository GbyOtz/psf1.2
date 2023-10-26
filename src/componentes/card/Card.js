import React, { useState } from 'react';
import './Card.css';

function App() {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    title: '',
    imageSrc: '',
    
    comment: '',
    price: '',
    location: '',
  });

  const addCard = () => {
    if (newCard.title && newCard.imageSrc &&  newCard.comment && newCard.price) {
      setCards([...cards, newCard]);
      setNewCard({
        title: '',
        imageSrc: '',
        
        comment: '',
        price: '',
        location: '',
      });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewCard({ ...newCard, imageSrc: e.target.result });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app">
      <h1>Propiedades en Venta</h1>
      <form className="add-card-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            placeholder="¿Qué Vendes/Compras?"
            value={newCard.title}
            onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            placeholder="Descripción de lo que Vendes/Compras"
            value={newCard.comment}
            onChange={(e) => setNewCard({ ...newCard, comment: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            placeholder="Precio de lo que Vendes/Compras"
            value={newCard.price}
            onChange={(e) => setNewCard({ ...newCard, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Ubicación:</label>
          <select
            value={newCard.location}
            onChange={(e) => setNewCard({ ...newCard, location: e.target.value })}
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
        <button onClick={addCard}>Agregar Tarjeta</button>
      </form>

      <div className="app">
        <h1>Tarjetas de Propiedades</h1>
        <div className="card-list">
          {cards && cards.map((card, index) => (
            <div className="card" key={index}>
               <p className="card-title">{card.title}</p>
              <div className="circle-container" style={{ backgroundImage: `url(${card.imageSrc})` }}></div>
              <div className="card-details">
               
                <p className="card-comment">Descripcion<br/>{card.comment}</p>
                <p className="card-price">Precio: Bs.{card.price}</p>
                <p className="card-location">Ubicación: {card.location}/Bolivia.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
