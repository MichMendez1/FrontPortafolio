import React, { Fragment, useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Registrocolegio = () => {
  const [users, setUsers] = useState([]);
  const [id_Sostenedor, setId_Sostenedor] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: null,
    id_Sostenedor: "",
    nombre: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const baseUrl = "http://localhost:4000/api/colegios";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/colegios/nombre");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(baseUrl);
      setUsers(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const addUser = async (event) => {
    event.preventDefault();

    const newUser = {
      id_Sostenedor: "",
      nombre: "",
      direccion: "",
      telefono: "",
      email: "",
      _id: uuidv4(),
    };

    try {
      await axios.post(baseUrl, newUser);
      getUsers();
      resetForm();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${baseUrl}/nombre${id}`);
      getUsers();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`${baseUrl}/nombre${currentUser._id}`, currentUser);
      getUsers();
      resetForm();
    } catch (error) {
      console.log("Error:", error);
    }

    setEditing(false);
    setCurrentUser({
      _id: null,
      id_Sostenedor: "",
      nombre: "",
      direccion: "",
      telefono: "",
      email: "",
    });
  };
  const confirmarColegio = async (token) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/colegios/confirmar/${token}`);
      console.log(response.data); 
      fetchUsers(); 
    } catch (error) {
      console.error(error);
    }
  };


  const resetForm = () => {
    setId_Sostenedor("");
    setNombre("");
    setDireccion("");
    setTelefono("");
    setEmail("");

  };

  return (
    <Fragment>

      <Container>
        <h1>Colegios</h1>

        <Form onSubmit={editing ? updateUser : addUser}>
          <Form.Group controlId="formId_Sostenedor">
            <Form.Label>ID del Sostenedor</Form.Label>
            <Form.Control
              type="text"
              value={id_Sostenedor}
              onChange={(e) => setId_Sostenedor(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDireccion">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>


          <Button variant="primary" type="submit" >
            {editing ? "Actualizar" : "Agregar"}
          </Button>
          {editing && (
            <Button variant="secondary" onClick={resetForm}>
              Cancelar
            </Button>
          )}
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Sostenedor</th>
              <th>Nombre Colegio</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.id_Sostenedor}</td>
                <td>{user.nombre}</td>
                <td>{user.direccion}</td>
                <td>{user.telefono}</td>
                <td>{user.email}</td>

                <td>
                  {/* Botón para confirmar usuario */}
                  {!user.confirmado && user.token && (
                    <Button
                      variant="success"
                      onClick={() => confirmarColegio(user.token)}
                      className="mr-2"
                    >
                      Confirmar
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    onClick={() => editUser(user)}
                    className="mr-2"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

export default Registrocolegio;


















/* import React from 'react';
import './registrocolegio.css';
import axios from "axios";
import { useState } from 'react';

const RegistroColegio=()=> {
    const [Colegio, SetColegio]=useState((
        {
            'id_sostenedor':'',
            'name':'',
            'adress':'',
            'phono':'',
            'email':'',
        }
    ))

    const [message, setMessage]=useState('');

    const{id_sostenedor,name,adress,phono,email} = Colegio;

    const HandleChange=((e)=> {
        SetColegio({...Colegio,[e.target.name]: e.target.value})
    })
    const submitForm= async(e)=>{
        e.preventDefault()
        await axios.post('mongodb+srv://nuevosh:nuevosh@cluster0.rihpkpe.mongodb.net/tes',Colegio)
        .then((result) => {
            //console.log(result);
          //  const message="Registro Exitoso";
            setMessage(message);
      
        }).catch((err)=> {
            alert('Hay ocurrido un problema')
        });
    }

    return (
        <div>
            <div className='container forms'>
                <form onSubmit={e=>submitForm(e)}>
                <div className='row'>
                    <div className='col-md-12 text-center'><h2>Agregar Colegio</h2></div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'><h2>{message}</h2></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Id Sostenedor</div>
                    <div className='col-md-4'><input type='text' name='id_sostenedor' 
                    value={id_sostenedor} className='form-control' 
                    onChange={e=>HandleChange(e)} /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Nombre</div>
                    <div className='col-md-4'><input type='text' name='name' 
                    value={name} onChange={e=>HandleChange(e)}
                    className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Dirección</div>
                    <div className='col-md-4'><input type='text' name='adress' 
                    value={adress} onChange={e=>HandleChange(e)}
                    className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Teléfono</div>
                    <div className='col-md-4'><input type='text' name='phono' 
                     value={phono} onChange={e=>HandleChange(e)}
                    className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>Email</div>
                    <div className='col-md-4'><input type='email' name='email' 
                     value={email} onChange={e=>HandleChange(e)}
                    className='form-control' /></div>
                    <div className='col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 text-center'>
                        <button className='btn btn-warning'>Agregar Colegio</button>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                </form>
            </div>
            
        </div>
    )
}

export default RegistroColegio
 */