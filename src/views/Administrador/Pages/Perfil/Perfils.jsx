import React from "react";
import './perfil.css';
import SidebarAdm from '../../components/Sidebar/SidebarAdm';


const Perfils = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const { nombres, apellido_paterno, Apellido_Materno, email, Direccion, Tipo } = user || {}

  return (

    <div className="background-container">
       <SidebarAdm />
      <div className="perfil-container">
        <div className="perfil-header">
          <h3 className="perfil-nombre">{nombres} {apellido_paterno} {Apellido_Materno}</h3>
          <p className="perfil-tipo">{Tipo}</p>
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
                <strong>Celular:</strong> +569 671082222
              </p>
              <p className="perfil-contacto">
                <strong>Direccion:</strong> 
                <a> {Direccion} </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfils;
