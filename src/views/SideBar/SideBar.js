import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const handleLogout=()=>{
    sessionStorage.removeItem('user');
    window.location.href="/login"

  }
  return (sessionStorage.getItem('user')  &&(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          NH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Perfil" className="nav-link" activeClassName="active">
                Perfil
              </NavLink>
            </li>
            
                <li className="nav-item">
                  <NavLink className="nav-link" to="/asistenteadm">
                    Administracion de usuarios
                  </NavLink>
                </li>
              
            <li className="nav-item">
              <Button  style={{marginRight: "4rem"}} variant="outline-light" onClick={handleLogout}>
                  Salir
              </Button>

            </li>
            <li className="nav-item">
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ));
};

export default Navbar;
