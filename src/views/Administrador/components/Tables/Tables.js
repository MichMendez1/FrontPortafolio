import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./table.css";

function Tables() {

  return (
    <>
      <div className='container'>
        <Row>
          <div className='col mt-0'>
            <Card className='shadow'>
              <Table className='align-align-items-center' responsive='sm'>
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>Apellido Paterno</th>
                    <th>Email</th>
                    <th>Trabajo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Qwest</td>
                    <td>aaaa</td>
                    <td>qwest@gmail.com</td>
                    <td>escribe</td>
                    {/* <td className='d-flex align-items-center'></td>
                    <Dropdown className='text-center'>
                      <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                        <Badge bg='primary'>
                          Registro
                        </Badge>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Nuevos</Dropdown.Item>
                        <Dropdown.Item>Viejos</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}
                    <td>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faEye} style={{ color: "green" }} /><span> Registro</span>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faPenToSquare} style={{ color: "blue" }} /><span> Editar</span>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} /><span> Eliminar</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  )
}

export default Tables
