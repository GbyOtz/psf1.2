import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Routes
import Navbar from './Componentes/Navbar/Navbar';
import Pagina1 from './Componentes/Pagina1/Pagina1';
import Pagina2 from './Componentes/Pagina2/Pagina2';
import Pagina3 from './Componentes/Pagina3/Pagina3';
import Pagina4 from './Componentes/Pagina4/Pagina4';

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
         {/* Agrega el componente de Footer aquí */}
      </div>
    </BrowserRouter>
  );
}
export default App;