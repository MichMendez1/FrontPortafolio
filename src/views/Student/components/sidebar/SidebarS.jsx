import React from 'react';
import { Link } from 'react-router-dom';

import "./sidebar.scss";
import logo from "./Nuevos Horizontes.png";
import HomeIcon from '@mui/icons-material/Home';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const handleLogout=()=>{
  sessionStorage.removeItem('user');
  window.location.href="/login"

}
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <img className="logo" src={logo} alt="Logo"></img>
      </div>

      <div className="center">
        <ul>
          <li>
            <Link to="/student" className='link'>
              <HomeIcon className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/student/asistencia" className='link'>
              <LocalLibraryOutlinedIcon className="icon" />
              <span>Asistencia</span>
            </Link>
          </li>
          <li>
            <Link to="/student/anotaciones" className='link'>
              <EditNoteIcon className="icon" />
              <span>Anotaciones</span>
            </Link>
          </li>
          <li>
            <Link to="/student/notas" className='link'>
              <SchoolOutlinedIcon className="icon" />
              <span>Notas</span>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon"  />
            <span>Cerrar Sesión</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
