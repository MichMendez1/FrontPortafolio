import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './views/login';
import UserPage from './views/Asistente/Asistente';
import Perfil from './views/Perfil/Perfil';
import Navbar from './views/SideBar/SideBar';
import { useState } from 'react';
import { Container, Form, Button, Table } from "react-bootstrap";
import Registration from './views/Registro/registrationForm';
import LoginPage from './views/Login/Login';
import RegistrationPage from './views/Registro/registrationForm';
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



// const router = createBrowserRouter([
//   {
//     path: '/',
//     Component: App
//   },
//   {
//     path: '/login',
//     Component: Login
//   },
//   {
//     path: '/docente',
//     Component: Docente
//   },
//   {
//     path: '/asistenteadm',
//     Component: UserPage
//   },
//   {
//     path: '/perfil',
//     Component: Perfil
//   },
//   {
//     path: '/registro',
//     Component: RegistrationPage
//   },
//   {
//     path: '/home',
//     Component: HomePage
//   },
//   {
//     path: '/administrador',
//     Component: Administrador
//   },
//   {
//     path: '/homeadmin',
//     Component: Homeadmin
//   },
//   {
//     path: '/registerhome',
//     Component: RegisterHome
//   },
//   {
//     path: '/registerworker',
//     Component: RegisterWorker
//   },
//   {
//     path: '/registerassistant',
//     Component: RegisterAssistant
//   },
//   {
//     path: '/registerschool',
//     Component: RegisterSchool
//   },
//   {
//     path: '/editworker',
//     Component: EditWorker
//   },
//   {
//     path: '/profile',
//     Component: Profile
//   },
//   {
//     path: '/headers',
//     Component: Headers
//   },

// ])

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


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AppWithSidebar />
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
