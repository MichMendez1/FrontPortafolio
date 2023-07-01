import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Tables from '../../components/Tables/Tables';
import Spiner from "../../components/Spiner/Spiner";
import { useNavigate } from 'react-router-dom';
//import "./home.css";
import { Container } from 'react-bootstrap';
import SidebarAdm from '../../components/Sidebar/SidebarAdm';
import './perfil.scss';
// import { FormCheck } from 'react-bootstrap';

function Homeadmin() {

  const [showspin, setShowSpin] = useState(true)

  const navigate = useNavigate();

  const back = () => {
    navigate("/administrador")
  }

  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [])

  return (
    // <>
    //   <SidebarAdm />
    //   <Container>
    <div className="notas-container">
      <SidebarAdm />
        {/* <div className='add_btn'>
          <Button variant="primary" onClick={back}><FontAwesomeIcon icon={faHouse} />&nbsp;Volver</Button>
        </div> */}
        <div className='container'>
          <div className='main_div'>
            <div className='search_add mt-4 d-flex justify-content-between'>
              <div className='search col-lg-4'>
              </div>
            </div>
            <div className='filter_div mt-5 d-flex justify-content-between flex-wrap'>
            </div>
          </div>
          {
            showspin ? <Spiner /> : <Tables />
          }
        </div>
      {/* </Container>
    </> */}
    </div>
  )
}

export default Homeadmin
