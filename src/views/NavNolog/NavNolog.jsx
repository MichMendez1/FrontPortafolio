import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../img/Nuevos Horizontes.png";
import "./navbar.css";
function NavNolog() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#213c4e" }}
      >
        <div className="container">
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
                <div className="nav-item-content">
                  <img src={logoImage} alt="Logo" className="logo" />
                </div>
              </li>

              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/nosotros"
                  className="nav-link"
                  activeClassName="active"
                >
                  Sobre Nosotros
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  Contáctanos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/equipo">
                  Nuestro Equipo
                </NavLink>
              </li>

              <li className="login">
                <NavLink className="nav-link" to="/login">
                  Ingresar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavNolog;
