import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Routes
import Navbar from './Navbar';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3';
import Pagina4 from './Pagina4';
import Footer from './Footer.js';
import "font-awesome/css/font-awesome.css";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes> {/* Usa <Routes> en lugar de <Route> */}
            <Route path="/opcion1" element={<Pagina1 />} />
            <Route path="/opcion2" element={<Pagina2 />} />
            <Route path="/opcion3" element={<Pagina3 />} />
            <Route path="/opcion4" element={<Pagina4 />} />
            <Route index element={<Pagina1 />} />
          </Routes>
        </div>
        <Footer /> {/* Agrega el componente de Footer aquí */}
      </div>
    </BrowserRouter>
  );
}
export default App;