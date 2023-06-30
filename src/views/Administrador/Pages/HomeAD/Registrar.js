import React from 'react';
import SidebarAdm from '../../components/Sidebar/SidebarAdm';
import Card from 'react-bootstrap/Card';
import './perfil.scss';

const Registrar = () => {
  return (
    <div className="notas-container">
      <SidebarAdm />
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

export default Registrar;




/* import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import Tables from '../../components/Tables/Tables';
import SidebarAdm from '../../components/Sidebar/SidebarAdm';

import { useNavigate } from 'react-router-dom';
import "./home.css";


function Registrar() {

  const navigate = useNavigate();

  const adduser = () => {
    navigate("/registerworker")
  }

  const addassistant = () => {
    navigate("/registerassistant")
  }

  return (
    <>
          <SidebarAdm />
      <div className='container'>
        <div className='main_div'>
          <div className='search_add mt-4 d-flex justify-content-between'>
            <div className='add_btn'>
              <Button variant="primary" onClick={adduser}><FontAwesomeIcon icon={faPlus} />&nbsp;Agregar Trabajador</Button>
            </div>
          </div>
          <div className='add_btn'>
            <Button variant="primary" onClick={addassistant}><FontAwesomeIcon icon={faPlus} />&nbsp;Agregar Asistente</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registrar
 */