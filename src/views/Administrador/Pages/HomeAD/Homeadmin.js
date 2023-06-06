import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Tables from '../../components/Tables/Tables';
import Spiner from "../../components/Spiner/Spiner";
import { useNavigate } from 'react-router-dom';
import "./home.css";
import Headers from '../../components/Headers/Headers';
// import { FormCheck } from 'react-bootstrap';

function Homeadmin() {

  const [showspin, setShowSpin] = useState(true)

  const navigate = useNavigate();

  const adduser = () => {
    navigate("/registerworker")
  }

  const addassistant = () => {
    navigate("/registerassistant")
  }

  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [])

  return (
    <>
      <div>
      <Headers />
      </div>
      <div className='container'>
        <div className='main_div'>
          {/* search add btn */}
          <div className='search_add mt-4 d-flex justify-content-between'>
            <div className='search col-lg-4'>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success" className='search_btn'>Buscar</Button>
              </Form>
            </div>
            <div className='add_btn'>
              <Button variant="primary" onClick={adduser}><FontAwesomeIcon icon={faPlus} />&nbsp;Agregar Trabajador</Button>
            </div>
          </div>


          <div className='add_btn'>
            <Button variant="primary" onClick={addassistant}><FontAwesomeIcon icon={faPlus} />&nbsp;Agregar Asistente</Button>
          </div>

          {/* export,colegio trabaja*/}
          <div className='filter_div mt-5 d-flex justify-content-between flex-wrap'>
            <div className='export_csv'>
              <Button className='export_btn'>Exportar a excel </Button>
            </div>

            {/* short by value*/}
            <div className='filter_neworld'>
              <h3>Filtrar Registros</h3>
              <Dropdown className='text-center'>
                <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                  <FontAwesomeIcon icon={faSort} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Nuevos</Dropdown.Item>
                  <Dropdown.Item>Viejos</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* filtrar por status*/}
            {/*<div className='filter_status'>
              <h3>Filtar por Colegio</h3>
              <div className='status_radio d-flex justify-content-around flex-wrap'>
                <Form.Check
                  type={"radio"}
                  label={'All'}
                  name="status"
                  value={"All"}
                  defaultChecked
                />
                <Form.Check
                  type={"radio"}
                  label={'Colegio_A'}
                  name="status"
                  value={"Colegio_A"}
                />
                <Form.Check
                  type={"radio"}
                  label={'Colegio_B'}
                  name="status"
                  value={"Colegio_B"}
                />
                <Form.Check
                  type={"radio"}
                  label={'Colegio_C'}
                  name="starus"
                  value={"Colegio_C"}
                />
              </div>
              </div> */}
          </div>
        </div>
        {
          showspin ? <Spiner /> : <Tables />
        }
      </div>
    </>
  )
}

export default Homeadmin
