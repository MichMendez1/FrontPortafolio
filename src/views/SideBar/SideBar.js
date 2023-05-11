import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="bg-primary text-white sidebar d-flex flex-column align-items-start">
      <button
        className="btn btn-link btn-sm text-white ms-2 mt-2 d-block d-md-none"
        type="button"
        onClick={handleCollapse}
      >
        <i className={`bi bi-${isCollapsed ? 'arrow-right' : 'arrow-left'} me-2`}></i>
        {isCollapsed ? 'abrir' : 'cerrar'}
      </button>
      <ul className={`nav flex-column ${isCollapsed ? 'collapse' : 'show'} d-md-flex`}>
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-white">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/asistenteadm" className="nav-link text-white">
            Asistente
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/perfil" className="nav-link text-white">
            Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
