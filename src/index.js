import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './views/login';
import UserPage from './views/Asistente/AdministracionEstudiantes';
import Perfil from './views/Perfil/Perfil';
import Navbar from './views/SideBar/SideBar';
import { useState } from 'react';
import RegistrationPage from './views/Registro/RegistroEstudiante';
import { Container, Form, Button, Table } from 'react-bootstrap';
import HomePage from './views/Home/Home';
import Docente from './views/docente/app';
import RegistroEstudiante from './views/Registro/RegistroEstudiante';
import CrudEstudiantes from './views/Asistente/AdministracionEstudiantes';
import CrudApoderados from './views/Asistente/AdministracionApoderados';
import AboutPage from './views/About/sobreNosotros';
import NavNolog from './views/NavNolog/NavNolog';
import CrudProfesores from './views/Asistente/AdministracionProfesores';
import ProfesoresPage from './views/NuestroEquipo/NuestroEquipo';
import Horarios from './views/Horario/horario';
import Student from './views/Student/Student';
import 'bootstrap/scss/bootstrap.scss'
import Asistencia from "./views/Student/pages/Asistencia"
import Notas from './views/Student/pages/Notas';
import Anotaciones from './views/Student/pages/Anotaciones';




const user = JSON.parse(sessionStorage.getItem('user'));
   const { Name, Email, Role } = user || {};         
  const isLoggedIn = user;

const AppWithSidebar = () => (
  <div>
    {isLoggedIn ? <Navbar /> : <NavNolog />}

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<RegistroEstudiante />} />
      <Route path="/admEstudiantes" element={<CrudEstudiantes />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/docente" element={<Docente />} />
      <Route path="/admApoderados" element={<CrudApoderados />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/Equipo" element={<ProfesoresPage />} />
      <Route path="/admProfesores" element={<CrudProfesores />} />
      <Route path="/horarios" element={<Horarios />} />

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
