import React, { Fragment, useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";
import { v4 as uuidv4 } from "uuid";

const CrudApoderados = () => {
  const [users, setUsers] = useState([]);
  const [AlumnoID, setAlumnoID] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Apellido_Paterno, setApellido_Paterno] = useState("");
  const [Apellido_Materno, setApellido_Materno] = useState("");
  const [Fecha_Nacimiento, setFecha_Nacimiento] = useState("");
  const [Nacionalidad, setNacionalidad] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [Genero, setGenero] = useState("");
  const [Rut, setRut] = useState("");
 
  const [Ocupacion, setOcupacion] = useState("");
  const [Tipo, setTipo] = useState("Apoderado");
  const [formValid, setFormValid] = useState(false);
  const [RutValido, setRutValido] = useState(true);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    ApoderadoID: null,
    AlumnoID: "",
    Nombre: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Fecha_Nacimiento: "",
    Nacionalidad: "",
    Direccion: "",
    Correo: "",
    Contraseña: "",
    Genero: "",
    Rut: "",
    RutValido: "",
    Ocupacion: "",
    Tipo: "Apoderado",
  });

  const baseUrl = "http://localhost:3001/apoderados";


  useEffect(() => {
    getUsers();
    setFormValid(checkFormValidity());
  }, [RutValido]);

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
          AlumnoID,
          Nombre,
          Apellido_Paterno,
          Apellido_Materno,
          Fecha_Nacimiento,
          Nacionalidad,
          Direccion,
          Correo,
          Contraseña,
          Genero,
          Rut,
          RutValido,
          Ocupacion,
          Tipo:"Apoderado"
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
          ApoderadoID: uuidv4(),
          AlumnoID,
          Nombre,
          Apellido_Paterno,
          Apellido_Materno,
          Fecha_Nacimiento,
          Nacionalidad,
          Direccion,
          Correo,
          Contraseña,
          Genero,
          Rut,
          RutValido,
          Ocupacion,
          Tipo:"Apoderado"
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
    setAlumnoID(userToEdit.AlumnoID);
    setNombre(userToEdit.Nombre);
    setApellido_Paterno(userToEdit.Apellido_Paterno);
    setApellido_Materno(userToEdit.Apellido_Materno);
    setFecha_Nacimiento(userToEdit.Fecha_Nacimiento);
    setNacionalidad(userToEdit.Nacionalidad);
    setDireccion(userToEdit.Direccion);
    setCorreo(userToEdit.Correo);
    setContraseña(userToEdit.Contraseña);
    setGenero(userToEdit.Genero);
    setOcupacion(userToEdit.Ocupacion);
    setRut(userToEdit.Rut);
    setRutValido(userToEdit.RutValido);
    
  };
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

  const handleRutChange = (event) => {
    const rut = event.target.value;
    setRut(rut);

    // Verificar si el RUT es válido
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
    // Verificar la validez de los campos y retornar true o false
    return RutValido; // Puedes agregar más validaciones aquí si tienes otros campos
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
    setAlumnoID("");
    setNombre("");
    setApellido_Paterno("");
    setApellido_Materno("");
    setFecha_Nacimiento("");
    setNacionalidad("");
    setDireccion("");
    setCorreo("");
    setContraseña("");
    setGenero("");
    setRut("");
    setRutValido("");
    setOcupacion("");
    setTipo("Apoderado");
    setEditing(false);
    setCurrentUser({
      ApoderadoID: null,
      AlumnoID: "",
      Nombre: "",
      Apellido_Paterno: "",
      Apellido_Materno: "",
      Fecha_Nacimiento: "",
      Nacionalidad: "",
      Direccion: "",
      Correo: "",
      Contraseña: "",
      Genero: "",
      Rut: "",
      RutValido:"",
      Ocupacion: "",
      Tipo: "Apoderado",
    });
  };

  return (
    <Fragment>
      <Container>
        <h1 className="my-5">Administracion de usuarios</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>ID Alumno</Form.Label>
            <Form.Control
              type="text"
              value={AlumnoID}
              onChange={(event) => setAlumnoID(event.target.value)}
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
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control
              type="text"
              value={Apellido_Paterno}
              onChange={(event) => setApellido_Paterno(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control
              type="text"
              value={Apellido_Materno}
              onChange={(event) => setApellido_Materno(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="date"
              value={Fecha_Nacimiento}
              onChange={(event) => setFecha_Nacimiento(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control
              type="text"
              value={Nacionalidad}
              onChange={(event) => setNacionalidad(event.target.value)}
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
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              value={Correo}
              onChange={(event) => setCorreo(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Género</Form.Label>
            <Form.Select
              value={Genero}
              onChange={(event) => setGenero(event.target.value)}
            >
              <option value="">Selecciona...</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ocupación</Form.Label>
            <Form.Control
              type="text"
              value={Ocupacion}
              onChange={(event) => setOcupacion(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>RUT</Form.Label>
            <Form.Control
              type="text"
              value={Rut}
              onChange={handleRutChange}
              isInvalid={!RutValido}
            />
            {!RutValido && (
              <Form.Control.Feedback type="invalid">
                RUT inválido
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-3" disabled={!formValid}>
          {editing ? "Actualizar" : "Crear"}
          </Button>
          
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rut</th>
              <th>Curso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.AlumnoID}</td>
                <td>
                  {user.Nombre}
                  {user.Apellido_Paterno}
                  {user.Apellido_Materno}
                </td>
                <td>{user.Correo}</td>
                <td>{user.Rut}</td>
                <td>{user.CursoID}</td>
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

export default CrudApoderados;
