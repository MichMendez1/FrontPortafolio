import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './views/login';
import UserPage from './views/Asistente/AdministracionEstudiantes';
import Perfil from './views/Perfil/Perfil';
import Navbar from './views/SideBar/SideBar';
import { useState } from 'react';
import RegistrationPage from './views/Registro/RegistroEstudiante';
import { Container, Form, Button, Table } from 'react-bootstrap';
import HomePage from './views/Home/Home';
import Docente from './views/docente/app';
import Administrador from './views/Administrador/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homeadmin from './views/Administrador/Pages/HomeAD/Homeadmin';
import RegisterHome from './views/Administrador/Pages/Register/RegisterWorker';
import RegisterSchool from './views/Administrador/Pages/Register/RegisterSchool';
import RegisterAssistant from './views/Administrador/Pages/Register/RegisterAssistant';
import RegisterWorker from './views/Administrador/Pages/Register/RegisterWorker';
import Headers from './views/Administrador/components/Headers/Headers';
import Profile from './views/Administrador/Pages/Profile/Profile';
import EditWorker from './views/Administrador/Pages/Edit/EditWorker';
import RegisterTeacher from './views/Administrador/Pages/Register/RegisterTeacher';
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
      {user && user.Role === 'Admin' && (
        <Route path="/registro" element={<RegistrationPage />} />
      )}
      {user && user.Role === 'Admin' && (
        <Route path="/asistenteadm" element={<UserPage />} />
      )}

      <Route path="/perfil" element={<Perfil />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/docente" element={<Docente />} />
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

      <Route path="/administrador" element={<Administrador />} />
      <Route path="/homeadmin" element={<Homeadmin />} />
      <Route path="/registerhome" element={<RegisterHome />} />
      <Route path="/registerworker" element={<RegisterWorker />} />
      <Route path="/registerassistant" element={<RegisterAssistant />} />
      <Route path="/registerschool" element={<RegisterSchool />} />
      <Route path="/registerteacher" element={<RegisterTeacher />} />
      <Route path="/editworker" element={<EditWorker />} />
      <Route path="/headers" element={<Headers />} />
      <Route path="/userprofile/:id" element={<Profile/>} />
      {/*     <Route path="/edit/:id" element={<Edit />} />
       */}

    </Routes>
  </div>
);

ReactDOM.render(
  <Router>
    <AppWithSidebar />
  </Router>,
  document.getElementById('root')
);
