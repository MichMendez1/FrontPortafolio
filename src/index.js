import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './views/login';
import UserPage from './views/Asistente/Asistente';
import Perfil from './views/Perfil/Perfil';
import Sidebar from './views/SideBar/SideBar';
import { useState } from 'react';
import { Container, Form, Button, Table } from "react-bootstrap";


const router = createBrowserRouter([
  {
    path:'/',
    Component:App
  },
  {
    path:'/login',
    Component:Login
  }
  ,
  {
    path:'/asistenteadm',
    Component:UserPage
  },
  {
    path:'/perfil',
    Component:Perfil
  }
])
const AppWithSidebar = () => (
  <div>
    <Sidebar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/asistenteadm" element={<UserPage />} />
      <Route path="/perfil" element={<Perfil />} />
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
