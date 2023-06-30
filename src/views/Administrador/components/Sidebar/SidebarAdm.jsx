import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "./Nuevos Horizontes.png";

const SidebarAdm = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#012c56">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
             
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/administrador" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registraranno" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Año</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrardia" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Dia</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrartrabajo" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Trabajo</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrartrabajador" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Trabajador</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrarsostenedor" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Sostenedor</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrarcolegio" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar colegio</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrardirector" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Director</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrarsala" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Sala</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrarasignatura" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Asignatura</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrarbloque" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Bloque</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrarcurso" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Curso</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrarprofesor" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Registrar Profesor</CDBSidebarMenuItem>
            </NavLink>
             <NavLink exact to="/perfils" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Perfil</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="power-off">Cerrar Sesión</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>   
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '40px 5px',
            }}>
           <img className="logo" src={logo} alt="Logo"></img>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>     
    </div>
  );
};

export default SidebarAdm;
