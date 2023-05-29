import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './views/login';
import UserPage from './views/Asistente/AdministracionEstudiantes';
import Perfil from './views/Perfil/Perfil';
import Navbar from './views/SideBar/SideBar';
import { useState } from 'react';
import { Container, Form, Button, Table } from "react-bootstrap";
import Registration from './views/Registro/RegistroEstudiante';
import RegistrationPage from './views/Registro/RegistroEstudiante';
import HomePage from './views/Home/Home';

import Docente from './views/docente/app';
import RegistroEstudiante from './views/Registro/RegistroEstudiante';
import crudEstudiantes from './views/Asistente/AdministracionEstudiantes';
import CrudEstudiantes from './views/Asistente/AdministracionEstudiantes';
import CrudApoderados from './views/Asistente/AdministracionApoderados';
import AboutPage from './views/About/sobreNosotros';
import NavNolog from './views/NavNolog/NavNolog';
import CrudProfesores from './views/Asistente/AdministracionProfesores';
import ProfesoresPage from './views/NuestroEquipo/NuestroEquipo';


const router = createBrowserRouter([
  
  {
    path:'/',
    Component:App
  },
  {
    path:'/login',
    Component:Login
  },
  {
    path:'/docente',
    Component:Docente
  }
  ,
  {
    path:'/admestudiantes',
    Component:CrudEstudiantes
  },
  {
    path:'/perfil',
    Component:Perfil
  },
  {
    path:'/registro',
    Component:RegistroEstudiante
  },
  {
    path:'/admApoderados',
    Component:CrudApoderados
  },
  {
    path:'/home',
    Component:HomePage
  },
  {
    path:'/nosotros',
    Component:AboutPage
  }
])
const user = JSON.parse(sessionStorage.getItem('user'));
  const { Nombre, Tipo } = user || {}
  const isLoggedIn = user;
const AppWithSidebar = () => (
  
  <div>
    {isLoggedIn ? <Navbar /> : <NavNolog />}

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<RegistroEstudiante />} />
      <Route path="/admEstudiantes" element={<CrudEstudiantes />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/docente" element={<Docente />} />
      <Route path="/admApoderados" element={<CrudApoderados />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/Equipo" element={<ProfesoresPage />} />
      <Route path="/admProfesores" element={<CrudProfesores />} />
    </Routes>
  </div>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AppWithSidebar />
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
