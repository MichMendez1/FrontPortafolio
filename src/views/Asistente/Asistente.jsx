import React, { Fragment, useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");
  const [course, setCourse] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: "", email: "", role: "admin", course: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editing) {
      const updatedUsers = users.map((user) =>
        user.id === currentUser.id
          ? { ...user, name: name, email: email, role: role, course: role === "estudiante" ? course : "" }
          : user
      );
      setUsers(updatedUsers);
      setName("");
      setEmail("");
      setRole("admin");
      setCourse("");
      setEditing(false);
      setCurrentUser({ id: null, name: "", email: "", role: "admin", course: "" });
    } else {
      const newId = users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
      const newUser = { id: newId, name: name, email: email, role: role, course: role === "estudiante" ? course : "" };
      setUsers([...users, newUser]);
      setName("");
      setEmail("");
      setRole("admin");
      setCourse("");
    }
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditing(true);
    setCurrentUser(userToEdit);
    setName(userToEdit.name);
    setEmail(userToEdit.email);
    setRole(userToEdit.role);
    setCourse(userToEdit.course);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    if (event.target.value !== "estudiante") {
      setCourse("");
    }
  };

  return ( <Fragment>
    
  <Container>
    <h1 className="my-5">Administracion de usuarios</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rol</Form.Label>
        <Form.Control as="select" value={role} onChange={handleRoleChange}>
          <option value="admin">Admin</option>
          <option value="estudiante">Estudiante</option>
          <option value="profesor">Profesor</option>
        </Form.Control>
      </Form.Group>
      {role === "estudiante" && (
        <Form.Group className="mb-3">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" value={course} onChange={(event) => setCourse(event.target.value)} />
        </Form.Group>
      )}
      <Button variant="primary" type="submit" className="mb-3">
        {editing ? "Actualizar" : "Crear"}
      </Button>
    </Form>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Curso</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.course}</td>
            <td>
              <Button variant="primary" className="mx-2" onClick={() => handleEdit(user.id)}>
                Editar
              </Button>
              <Button variant="danger" onClick={() => handleDelete(user.id)}>
                Borrar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
  </Fragment>);}
  export default UserPage