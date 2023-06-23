import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Card from 'react-bootstrap/Card';
import './perfil.scss';

const PerfilEst = () => {
  return (
    <div className="notas-container">
      <Sidebar />
        <div className="perfil-container">
          <div className="perfil-header">
            <h3 className="perfil-nombre">Nombre</h3>
            <p className="perfil-tipo">Tipo</p>
            <p className="perfil-tipo">ID Curso:</p>
          </div>
          <div className="perfil-body">
            <div className="row">
              <div className="col-md-6">
                <h4>Datos de contacto</h4>
                <p className="perfil-info">
                  <p className="perfil-contacto">
                    <strong>Email:</strong> <a>email</a>
                  </p>
                  <p className="perfil-contacto">
                  <strong>Celular:</strong> +569 45667890
                </p>
                <p className="perfil-contacto">
                  <strong>Dirección:</strong>
                </p>                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default PerfilEst;
