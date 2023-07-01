import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import Tables from '../../components/Tables/Tables';
import Spiner from "../../components/Spiner/Spiner";
import { useNavigate } from 'react-router-dom';

import "./register.css";
// import { FormCheck } from 'react-bootstrap';

function Register() {

  const navigate = useNavigate();

  const adduser = () => {
    navigate("/registerworker")
  }

  const addassistant = () => {
    navigate("/registerassistant")
  }
  

  return (
    <>

        <div className='main_div'>
          {/* search add btn */}
          <div className='search_add mt-4 d-flex justify-content-between'>
            <div className='add_btn'>
              <Button variant="primary" onClick={adduser}><FontAwesomeIcon icon={faPlus} />&nbsp;Agregar Trabajador</Button>
            </div>
          </div>


          <div className='add_btn'>
            <Button variant="primary" onClick={addassistant}><FontAwesomeIcon icon={faPlus} />&nbsp;Agregar Asistente</Button>
          </div>
        </div>
    </>
  );
}

export default Register
