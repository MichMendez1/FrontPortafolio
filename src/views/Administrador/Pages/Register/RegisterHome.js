import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Tables from '../../components/Tables/Tables';
import Spiner from "../../components/Spiner/Spiner";
import { useNavigate } from 'react-router-dom';
import "./home.css";



function RegisterHome() {

    const navigate = useNavigate();

  const adduser = () => {
    navigate("/registerworker")
  }

  const addassistant = () => {
    navigate("/registerassistant")
  }
  
    return (


        
        <div>
            <div className='add_btn'>
                <Button variant="primary" onClick={adduser}><FontAwesomeIcon icon={faPlus} />&nbsp;Agregar Trabajador</Button>
            </div>

            <div className='add_btn'>
                <Button variant="primary" onClick={addassistant}><FontAwesomeIcon icon={faPlus} />&nbsp;Agregar Asistente</Button>
            </div>
        </div >
    )
}

export default RegisterHome
