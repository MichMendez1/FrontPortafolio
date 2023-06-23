import React, { Fragment, useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const CrudEstudiantes = () => {
  const [users, setUsers] = useState([]);
  const [cursoID, setCursoID] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellido_paterno, setApellidoPaterno] = useState("");
  const [apellido_materno, setApellidoMaterno] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [genero, setGenero] = useState("");
  const [rut, setRut] = useState("");
  const [tipo, setTipo] = useState("Estudiante");
  const [formValid, setFormValid] = useState(false);
  const [rutValido, setRutValido] = useState(true);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: null,
    cursoID: "",
    nombres: "",
    apellido_paterno: "",
    apellido_materno: "",
    fecha_nacimiento: "",
    Colegio_De_Procedencia: "",
    nacionalidad: "",
    direccion: "",
    email: "",
    password: "",
    genero: "",
    rut: "",
    tipo: "",
  });

  const baseUrl = "http://localhost:4000/api/estudiantes";
  const cursos = "http://localhost:3001/cursos";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/estudiantes/usuarios");
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
      cursoID,
      nombres,
      apellido_paterno,
      apellido_materno,
      fecha_nacimiento,
      nacionalidad,
      direccion,
      email,
      password,
      genero,
      rut,
      tipo,
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
      _id: null,
      cursoID: "",
      nombres: "",
      apellido_paterno: "",
      apellido_materno: "",
      fecha_nacimiento: "",
      nacionalidad: "",
      direccion: "",
      email: "",
      password: "",
      genero: "",
      rut: "",
      tipo: "",
    });
  };
  const confirmarUsuario = async (token) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/estudiantes/confirmar/${token}`);
      console.log(response.data); // Mensaje de confirmación del backend
      fetchUsers(); // Vuelve a cargar la lista de usuarios después de confirmar
    } catch (error) {
      console.error(error);
    }
  };


  const resetForm = () => {
    setCursoID("");
    setNombres("");
    setApellidoPaterno("");
    setApellidoMaterno("");
    setFechaNacimiento("");
    setNacionalidad("");
    setDireccion("");
    setEmail("");
    setPassword("");
    setGenero("");
    setRut("");
    setTipo("Estudiante");
  };

  return (
    <Fragment>
      <Sidebar />
      <Container>
        <h1>Estudiantes</h1>

        <Form onSubmit={editing ? updateUser : addUser}>
          <Form.Group controlId="formCursoID">
            <Form.Label>ID del Curso</Form.Label>
            <Form.Control
              type="text"
              value={cursoID}
              onChange={(e) => setCursoID(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formNombres">
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              type="text"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formApellidoPaterno">
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control
              type="text"
              value={apellido_paterno}
              onChange={(e) => setApellidoPaterno(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formApellidoMaterno">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control
              type="text"
              value={apellido_materno}
              onChange={(e) => setApellidoMaterno(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formFechaNacimiento">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="date"
              value={fecha_nacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formNacionalidad">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control
              type="text"
              value={nacionalidad}
              onChange={(e) => setNacionalidad(e.target.value)}
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

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGenero">
            <Form.Label>Género</Form.Label>
            <Form.Control
              as="select"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              required
            >
              <option value="">Seleccionar</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Form.Control>
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

          <Form.Group controlId="formTipo">
            <Form.Label>Tipo de Usuario</Form.Label>
            <Form.Control
              as="select"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
            >
              <option value="Estudiante">Estudiante</option>
              <option value="Profesor">Profesor</option>
              <option value="Administrador">Administrador</option>
            </Form.Control>
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
              <th>ID</th>
              <th>ID del Curso</th>
              <th>Nombres</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Fecha de Nacimiento</th>
              <th>Nacionalidad</th>
              <th>Dirección</th>
              <th>Email</th>
              <th>Género</th>
              <th>RUT</th>
              <th>Tipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.cursoID}</td>
                <td>{user.nombres}</td>
                <td>{user.apellido_paterno}</td>
                <td>{user.apellido_materno}</td>
                <td>{user.fecha_nacimiento}</td>
                <td>{user.nacionalidad}</td>
                <td>{user.direccion}</td>
                <td>{user.email}</td>
                <td>{user.genero}</td>
                <td>{user.rut}</td>
                <td>{user.tipo}</td>
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

export default CrudEstudiantes;
