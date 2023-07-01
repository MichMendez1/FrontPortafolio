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
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      
      <CDBSidebar textColor="#fff" backgroundColor="#012c56">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/asistente" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/estudiante/asistencia" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="check-circle">Asistencia</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/estudiante/notas" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Notas</CDBSidebarMenuItem>
            </NavLink>
             <NavLink exact to="/estudiante/perfil" activeClassName="activeClicked">
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
