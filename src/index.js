import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './views/login';
import UserPage from './views/Asistente/Asistente';
import Perfil from './views/Perfil/Perfil';
import Navbar from './views/SideBar/SideBar';
import { useState } from 'react';
import { Container, Form, Button, Table } from "react-bootstrap";
import RegistrationPage from './views/Registro/registrationForm';
import HomePage from './views/Home/Home';
import Estudiante from './views/estudiante/estudiante'
import Docente from './views/docente/app';

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
    path:'/asistenteadm',
    Component:UserPage
  },
  {
    path:'/perfil',
    Component:Perfil
  },
  {
    path:'/registro',
    Component:RegistrationPage
  },
  {
    path:'/home',
    Component:HomePage
  },
  {
    path:'/estudiante',
    Component: Estudiante
  }
])
const user = JSON.parse(sessionStorage.getItem('user'));
  const { Name, Email, Role } = user || {}
const AppWithSidebar = () => (
  
  <div>
    < Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      {user && user.Role === 'Admin' && (
        <Route path="/registro" element={<RegistrationPage />} />
      )}
      {user && user.Role === 'Admin' && (
        <Route path="/asistenteadm" element={<UserPage />} />
      )}
      
      <Route path="/perfil" element={<Perfil />} />
      
      <Route path="/home" element={<HomePage />} />
      <Route path="/docente" element={<Docente />} />
      <Route path="/estudiante" element={<Estudiante />} />
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
