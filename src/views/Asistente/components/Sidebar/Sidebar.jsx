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

const Sidebar = () => {
  const handleLogout=()=>{
    sessionStorage.removeItem('user');
    window.location.href="/login"

  }
  return (
    <div style={{ display: 'flex', overflow: 'scroll initial' }}>
      
      <CDBSidebar textColor="#fff" backgroundColor="#012c56">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/homeAsistente" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admEstudiantes" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="check-circle">Administración Estudiantes</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admProfesores" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="check-circle">Administración Profesores</CDBSidebarMenuItem>
            </NavLink>
             <NavLink exact to="/perfilasistente" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Perfil</CDBSidebarMenuItem>
            </NavLink>
            <NavLink onClick={handleLogout} activeClassName="activeClicked">
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

export default Sidebar;
