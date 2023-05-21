import React from 'react';
import "./estudiante.scss";

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const estudiante = () => {
  return (
    <div >
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <div className='content'></div>
      </div>
  


    </div>

  );
};



export default estudiante


// <nav className="navbar">
// <img className="navbar-logo" src={logo} alt="logo" />
// <ul className="navbar-links">
//   <li><a href="/">Inicio</a></li>
//   <li><a href="/productos">Perfil</a></li>
//   <li><a href="/servicios">Servicios</a></li>
//   <li><a href="/contacto">Contacto</a></li>
// </ul>
// </nav>