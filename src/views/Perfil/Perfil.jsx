import React from "react";
import './perfil.css';
import ProfileImage from "../../img/profile-pic.png";
import BackgroundImage from "../../img/bg-patterns.png";

const Perfil = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const { nombres, apellido_paterno, apellido_materno, email, direccion, tipo, UrlFoto, cursoID } = user || {}

  return (
    <div className="background-container">
      <div className="perfil-container">
        <div className="perfil-header">
          <img
            src={UrlFoto}
            alt="Profile"
            className="perfil-foto"
          />
          <h3 className="perfil-nombre">{nombres} {apellido_paterno} {apellido_materno}</h3>
          <p className="perfil-tipo">{tipo}</p>
          <p className="perfil-tipo"> ID Curso: {cursoID}</p>
        </div>
        <div className="perfil-body">
          <div className="row">
            <div className="col-md-6">
              <h4>Info</h4>
              <p className="perfil-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse scelerisque, nunc eu convallis interdum,
                massa ligula molestie justo, quis ullamcorper sapien
                lorem eget nisi.
              </p>
            </div>
            <div className="col-md-6">
              <h4>Informacion de contacto</h4>
              <p className="perfil-contacto">
                <strong>Email:</strong>{" "}
                <a href="mailto:john.doe@example.com">
                  {email}
                </a>
              </p>
              <p className="perfil-contacto">
                <strong>Celular:</strong> +569 45667890
              </p>
              <p className="perfil-contacto">
                <strong>Direccion:</strong> 
                <a> {direccion} </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image" src={BackgroundImage} alt="Background" />
    </div>
  );
};

export default Perfil;
