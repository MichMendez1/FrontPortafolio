import React, { Fragment, useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const CrudColegio = () => {
  const [users, setUsers] = useState([]);
  const [IdSostenedor, setIdSostenedor] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Correo, setCorreo] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    ColegioID: null,
    IdSostenedor: "",
    Nombre: "",
    Telefono: "",
    Direccion: "",
    Correo: "",
  });

  const baseUrl = "http://localhost:4000/colegios";

  const getUsers = async () => {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editing) {
      try {
        const updatedUser = {
          ...currentUser,
          IdSostenedor,
          Nombre,
          Direccion,
          Telefono,
          Correo,
          
        };
        const response = await fetch(`${baseUrl}/${currentUser.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        });
        if (response.ok) {
          getUsers();
          resetForm();
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      try {
        const newUser = {
          ColegioID: uuidv4(),
          IdSostenedor,
          Nombre,
          Direccion,
          Telefono,
          Correo,
        };
        const response = await fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        if (response.ok) {
          getUsers();
          resetForm();
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditing(true);
    setCurrentUser(userToEdit);
    setIdSostenedor(userToEdit.IdSostenedor);
    setNombre(userToEdit.Nombre);
    setDireccion(userToEdit.Direccion);
    setTelefono(userToEdit.Telefono);
    setCorreo(userToEdit.Correo);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        getUsers();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const resetForm = () => {
    setIdSostenedor("");
    setNombre("");
    setDireccion("");
    setTelefono("");
    setCorreo("");
    setEditing(false);
    setCurrentUser({
      ColegioID: null,
      IdSostenedor: "",
      Nombre: "",
      Direccion: "",
      Telefono: "",
      Correo: "",
    });
  };

  return (
    <Fragment>
      <Container>
        <h1 className="my-5">Administracion de colegios</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>ID Sostenedor</Form.Label>
            <Form.Control
              type="text"
              value={IdSostenedor}
              onChange={(event) => setIdSostenedor(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={Nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              value={Direccion}
              onChange={(event) => setDireccion(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              value={Telefono}
              onChange={(event) => setTelefono(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              value={Correo}
              onChange={(event) => setCorreo(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-3" >
          {editing ? "Actualizar" : "Crear"}
          </Button>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID Colegio</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.ColegioID}</td>
                <td>
                  {user.Nombre}
                </td>
                <td>{user.Correo}</td>
                <td>
                  <Button
                    variant="primary"
                    className="mx-2"
                    onClick={() => handleEdit(user.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Borrar
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

export default CrudColegio;


















/* import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Spiner from "../../components/Spiner/Spiner";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"

function RegisterSchool() {


    const [inputdata, setInputData] = useState({
      name: "",
      code: "",
      address: "",
      mobil: "",
      email: "",
    });
  
    const [status, setStatus] = useState("Active");
    const [showspin, setShowSpin] = useState(true);
    //const [image,setImage] = useState("");
    //const [preview,setPreview] = useState("");

  
    //setInput Value
    const setInputValue = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputdata, [name]: value })
    }
  
    // status set
    const setStatusValue = (e) => {
      setStatus(e.value)
    }
  
    // profile set
    // const setProfile = (e)=>{
    //   setImage(e.target.files[0])
    // }
  
    //Registrar submit userdata
    const submitUserData = (e) => {
      e.preventDefault();
  
      const { name, code, address, mobil, email } = inputdata;
      if (name === "") {
        toast.error("Nombre es requerido!")
      } else if (code === "") {
        toast.error("Codigo es Requerido!")
      } else if (address === "") {
        toast.error("Direccion es Requerido!")
      } else if (mobil === "") {
        toast.error("telefono es Requerido!")
      } else if (mobil.length > 9) {
        toast.error("Número invalido!")
      } else if (email === "") {
        toast.error("Corro es Requerido!")
      } else if (!email.includes("@")) {
        toast.error("Ingrese un correo valido!")
      } else {
        toast.success("El establecimiento a sido ingresado!")
      }
  
    }
  
    // useEffect(()=>{
    //   if(image){
    //     setPreview(URL.createObjectURL(image))
    //   }
    // },[image])
  
  
    return (
      <>
      
        <div className='container'>
          <h2 className='text-center mt-1'>Registrar Colegio</h2>
          <Card className='shadow mt-3 p-3'>
            <div className="profile_div text-center">
              {/* <img src={preview ? preview : "/logo.png"} alt="img" /> */
/*             </div>
  
            <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" name='name' value={inputdata.nombres} onChange={setInputValue} placeholder='Nombres' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Codigo Colegio </Form.Label>
                  <Form.Control type="text" name='code' value={inputdata.codigo} onChange={setInputValue} placeholder='Codigo Colegio' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Direccion</Form.Label>
                  <Form.Control type="text" name='address' value={inputdata.direccion} onChange={setInputValue} placeholder='Ingrese su Direccion' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="text" name='mobil' value={inputdata.telefono} onChange={setInputValue} placeholder='Número Telefonico' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='ingrese correo' />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={submitUserData}>
                  Registrar Colegio
                </Button>
              </Row>
            </Form>
          </Card>
          <ToastContainer position="top-right" />
        </div>
      </>
    )
  }
  
  export default RegisterSchool */ 