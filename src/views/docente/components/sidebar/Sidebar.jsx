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

// if (page === 'notas'){
//   setTipoTabla('notas')
//   setBuscador(true)
//   setAnotaciones(true)
//   setTabla(true)
//   setCrearAnotacion(false)
// }
// if (page === 'asistencia'){
//   setTipoTabla('asistencia')
//   setBuscador(true)
//   setAnotaciones(true)
//   setTabla(true)
//   setCrearAnotacion(false)
// }
// if (page === 'anotaciones'){
//   setListaAlumno(null)
//   setTipoTabla('anotaciones')
//   setBuscador(false)
//   setAnotaciones(false)
//   setTabla(false)
//   // setCrearAnotacion(true)
// }
function Sidebar ({cambiarPage}){

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#012c56">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink onClick={cambiarPage} activeClassName="activeClicked" value='asistencia'>
              <CDBSidebarMenuItem icon="check-circle">Asistencia</CDBSidebarMenuItem>
            </NavLink>
            <NavLink onClick={cambiarPage} activeClassName="activeClicked" value='notas'>
              <CDBSidebarMenuItem icon="chart-line">Notas</CDBSidebarMenuItem>
            </NavLink>
            <NavLink onClick={cambiarPage} activeClassName="activeClicked" value='anotaciones'>
              <CDBSidebarMenuItem icon="book-dead">Anotaciones</CDBSidebarMenuItem>
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
