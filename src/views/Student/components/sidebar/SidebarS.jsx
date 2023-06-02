import "./sidebar.scss";
import logo from "./Nuevos Horizontes.png";
import HomeIcon from '@mui/icons-material/Home';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <img className="logo" src={logo}></img>
      </div>

      <div className="center">
        <ul>
          <li>
            <HomeIcon className="icon"/>
            <span>Home</span>
          </li>
          <li>
            <LocalLibraryOutlinedIcon className="icon"/>
            <span>Asistencia</span>
          </li>
          <li>
            <EditNoteIcon className="icon"/>
            <span>Anotaciones</span>
          </li>
          <li>
            <SchoolOutlinedIcon className="icon"/>
            <span>Notas</span>
          </li>
          <li>
            <ExitToAppIcon className="icon"/>
            <span>Cerrar Sesión</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
