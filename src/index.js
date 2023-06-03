import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './views/login';
import UserPage from './views/Asistente/Asistente';
import Perfil from './views/Perfil/Perfil';
import Navbar from './views/SideBar/SideBar';
import { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import RegistrationPage from './views/Registro/registrationForm';
import HomePage from './views/Home/Home';
import Docente from './views/docente/app';
import Student from './views/Student/Student';
import 'bootstrap/scss/bootstrap.scss'
import Asistencia from "./views/Student/pages/Asistencia"
import Notas from './views/Student/pages/Notas';
import Anotaciones from './views/Student/pages/Anotaciones';


const user = JSON.parse(sessionStorage.getItem('user'));
const { Name, Email, Role } = user || {};

const AppWithSidebar = () => (
  <div>
    <Navbar />
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
      <Route path="student">
            <Route index element={<Student/>} />
            <Route path= '/student/asistencia' element={<Asistencia/>}/>
            <Route path='/student/notas' element={<Notas/>} />
            <Route path='/student/anotaciones' element={<Anotaciones/>} />
      </Route>
    </Routes>
  </div>
);

ReactDOM.render(
  <Router>
    <AppWithSidebar />
  </Router>,
  document.getElementById('root')
);
