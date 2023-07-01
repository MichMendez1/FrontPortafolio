import React, { Fragment, useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const RegistrarSostenedor = () => {
  const [users, setUsers] = useState([]);
  const [id_sostenedor, setId_sostenedor] = useState("");
  const [nombre, setNombre] = useState("");
  const [ap_paterno, setApPaterno] = useState("");
  const [ap_materno, setApMaterno] = useState("");
  const [rut, setRut] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [rutValido, setRutValido] = useState(true);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id_sostenedor: "",
    nombre: "",
    ap_paterno: "",
    ap_materno: "",
    rut: "",
    direccion: "",
    telefono: "",
    correo: "",
  });

  const baseUrl = "http://localhost:4000/api/sostenedores";


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/sostenedores");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setFormValid(checkFormValidity());
  }, [rutValido]);

  const calcularDigitoVerificador = (rut) => {
    let suma = 0;
    let multiplo = 2;

    for (let i = rut.length - 1; i >= 0; i--) {
      suma += parseInt(rut.charAt(i)) * multiplo;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const resultado = 11 - (suma % 11);
    return resultado === 11 ? "0" : resultado === 10 ? "K" : resultado.toString();
  };

  const handlerutChange = (event) => {
    const rut = event.target.value;
    setRut(rut);

    const rutSinGuiones = rut.replace(/\./g, "").replace(/-/g, "");
    const digitoVerificador = rutSinGuiones.slice(-1);
    const rutNumerico = rutSinGuiones.slice(0, -1);
    const digitoCalculado = calcularDigitoVerificador(rutNumerico);

    if (digitoVerificador.toUpperCase() === digitoCalculado) {
      setRutValido(true);
    } else {
      setRutValido(false);
    }
  };

  const checkFormValidity = () => {
    return rutValido;
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
      id_sostenedor,
      nombre,
      ap_paterno,
      ap_materno,
      rut,
      direccion,
      telefono,
      correo,
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
      await axios.delete(`${baseUrl}/usuarios${id}`);
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
      await axios.put(`${baseUrl}/usuarios${currentUser._id}`, currentUser);
      getUsers();
      resetForm();
    } catch (error) {
      console.log("Error:", error);
    }

    setEditing(false);
    setCurrentUser({
      id_sostenedor:"",
      nombre:"",
      ap_paterno:"",
      ap_materno:"",
      rut:"",
      direccion:"",
      telefono:"",
      correo:"",
    });
  };
  const confirmarUsuario = async (token) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/sostenedores/confirmar/${token}`);
      console.log(response.data); // Mensaje de confirmación del backend
      fetchUsers(); // Vuelve a cargar la lista de usuarios después de confirmar
    } catch (error) {
      console.error(error);
    }
  };


  const resetForm = () => {
    setId_sostenedor("");
    setNombre("");
    setApPaterno("");
    setApMaterno("");
    setRut("");
    setDireccion("");
    setTelefono("");
    setCorreo("");
   
  };

  return (
    <Fragment>
      <Container>
        <h1>Sostenedor</h1>

        <Form onSubmit={editing ? updateUser : addUser}>
          <Form.Group controlId="formId_sostenedor">
            <Form.Label>ID del sostenedro</Form.Label>
            <Form.Control
              type="text"
              value={id_sostenedor}
              onChange={(e) => setId_sostenedor(e.target.value)}
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

          <Form.Group controlId="formApPaterno">
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control
              type="text"
              value={ap_paterno}
              onChange={(e) => setApPaterno(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formApMaterno">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control
              type="text"
              value={ap_materno}
              onChange={(e) => setApMaterno(e.target.value)}
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
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formCorreo">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </Form.Group>


          <Form.Group controlId="formRut">
            <Form.Label>RUT</Form.Label>
            <Form.Control
              type="text"
              value={rut}
              onChange={handlerutChange}
              required
            />
            {!rutValido && (
              <Form.Text className="text-danger">
                El RUT ingresado no es válido.
              </Form.Text>
            )}
          </Form.Group>


          <Button variant="primary" type="submit" disabled={!formValid}>
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
              <th>ID del Curso</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.id_sostenedor}</td>
                <td>{user.nombre}</td>
                
                <td>
                  {/* Botón para confirmar usuario */}
                  {!user.confirmado && user.token && (
                    <Button
                      variant="success"
                      onClick={() => confirmarUsuario(user.token)}
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

export default RegistrarSostenedor;





// import React, { useEffect, useState } from 'react'
// import Card from "react-bootstrap/Card"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Row } from 'react-bootstrap';
// import Select from 'react-select';
// import Spiner from "../../components/Spiner/Spiner";
// import { ToastContainer, toast } from "react-toastify";
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import "./register.css"



// function RegistrarSostenedor() {


//   const [inputdata, setInputData] = useState({
//     id_sostenedor: "",
//     nombre: "",
//     ap_paterno: "",
//     ap_materno: "",
//     rut: "",
//     direccion: "",
//     telefono: "",
//     correo: "",

//   });

//   const [status, setStatus] = useState("Active");
//   const [showspin, setShowSpin] = useState(true);
//   //const [image,setImage] = useState("");
//   //const [preview,setPreview] = useState("");

//   //setInput Value
//   const setInputValue = (e) => {
//     const { name, value } = e.target;
//     setInputData({ ...inputdata, [name]: value })
//   }

//   // status set
//   const setStatusValue = (e) => {
//     setStatus(e.value)
//   }

//   // profile set
//   // const setProfile = (e)=>{
//   //   setImage(e.target.files[0])
//   // }

//   //Registrar submit userdata
//   const submitUserData = async (e) => {
//     e.preventDefault();

//     const { id_sostenedor, nombre, ap_paterno, ap_materno, rut, direccion,
//       telefono, correo } = inputdata;

//     if (id_sostenedor === "") {
//         toast.error("id trabajador es requerido!");
//     } else  if (nombre === "") {
//       toast.error("Nombres es requerido!");
//     } else if (ap_paterno === "") {
//       toast.error("Apellido Paterno es Requerido!");
//     } else if (ap_materno === "") {
//        toast.error("Apellido Materno es Requerido!");
//     } else if (rut === "") {
//       toast.error("Rut es Requerido!");
//     } else if (direccion === "") {
//       toast.error("Direccion es Requerido!");
//     } else if (telefono === "") {
//       toast.error("telefono es Requerido!");
//     } else if (telefono.length > 9) {
//       toast.error("Número invalido!");
//     } else if (correo === "") {
//       toast.error("Corro es Requerido!");
//     } else if (!correo.includes("@")) {
//       toast.error("Ingrese un correo valido!");
//     } else {
//       try {
//         const response = await axios.post('http://localhost:4000/api/Sostenedores', {
//     id_sostenedor: "",
//     nombre: "",
//     ap_paterno: "",
//     ap_materno: "",
//     rut: "",
//     direccion: "",
//     telefono: "",
//     correo: "",
//         });
//         console.log(response);
//         toast.success("El trabajador ha sido ingresado!");
//       } catch (error) {
//         console.error(error);
//         toast.error("Error al guardar el trabajador");
//       }
//     }
//   };
  



//   /* const inputdata = (e) => {
//     setTrabajador({
//         ...Trabajador,
//         [e.target.name]: e.target.value
//     })
//     console.log(Trabajador);
// }

// const HacerFetch = async ()=>{
//     try {
//         const response = await fetch('http://localhost:4000/api/Trabajadores/', {
//             method: 'POST',
//             body: JSON.stringify(Trabajador),
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });
//         console.log(response);
//         const json = await response.json();
//         console.log(json);
//         alert('hola')
//     } catch (error) {
//         console.log('error', error);
//         alert('error')
//     }
//     } */



//   return (
//     <>

//       <div className='container'>
//         <h2 className='text-center mt-1'>Registrar Trabajador</h2>
//         <Card className='shadow mt-3 p-3'>
//           <div className="profile_div text-center">
//             {/* <img src={preview ? preview : "/logo.png"} alt="img" /> */}
//           </div>

//           <Form>
//             <Row>
//             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                 <Form.Label>ID_Sostenedor</Form.Label>
//                 <Form.Control type="text" name='id_sostenedor' value={submitUserData.id_sostenedor} onChange={setInputValue} placeholder='Nombre' />
//               </Form.Group>
//               <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                 <Form.Label>Nombre</Form.Label>
//                 <Form.Control type="text" name='nombre' value={inputdata.nombre} onChange={setInputValue} placeholder='Nombre' />
//               </Form.Group>
//               <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                 <Form.Label>Apellido Paterno</Form.Label>
//                 <Form.Control type="text" name='ap_paterno' value={inputdata.ap_paterno} onChange={setInputValue} placeholder='Primer Apellido' />
//               </Form.Group>
//               <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                 <Form.Label>Apellido Materno</Form.Label>
//                 <Form.Control type="text" name='ap_materno' value={inputdata.ap_materno} onChange={setInputValue} placeholder='Segundo Apellido' />
//               </Form.Group>
//               <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                 <Form.Label>Rut</Form.Label>
//                 <Form.Control type="text" name='rut' value={inputdata.rut} onChange={setInputValue} placeholder='Ingrese su Rut' />
//               </Form.Group>
//               <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                 <Form.Label>Direccion</Form.Label>
//                 <Form.Control type="text" name='direccion' value={inputdata.direccion} onChange={setInputValue} placeholder='Trabajo' />
//               </Form.Group>
//               <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                 <Form.Label>Telefono</Form.Label>
//                 <Form.Control type="text" name='telefono' value={inputdata.telefono} onChange={setInputValue} placeholder='Número Telefonico' />
//               </Form.Group>
//               <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                 <Form.Label>Correo</Form.Label>
//                 <Form.Control type="email" name='correo' value={inputdata.correo} onChange={setInputValue} placeholder='ingrese correo' />
//               </Form.Group>


//               <Button variant="primary" type="submit" onClick={submitUserData}>
//                 Registrar Trabajador
//               </Button>
//             </Row>

//           </Form>
//         </Card>
//         <ToastContainer position="top-right" />
//       </div>
//     </>
//   )
// }

// export default RegistrarSostenedor