import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src="imagenes/imagen6.jpg" alt="Imagen de fondo" className="background-image" /> */}
      <Link to="/opcion1" className="navbar-brand">
      <i className="fa fa-home ico"></i>
      <div className='texto'>
        CasaNegocios
      </div>
      
      </Link>
      <div className="navbar-menu">
        <ul className="navbar-list">
          <li className="navbar-item">
          <i className="fa fa-home"></i>
            <Link to="/opcion1">Inicio</Link>
            
          </li>
          <li className="navbar-item">
          <i class="fa fa-building"></i>
            <Link to="/opcion2">Inmuebles</Link>
          </li>
          <li className="navbar-item">
          <i class="fa fa-question"></i>
            <Link to="/opcion3">Acerca De</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
