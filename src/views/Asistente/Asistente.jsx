import React, { Fragment, useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("admin");
  const [Grade, setGrade] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: "", email: "", role: "admin", course: "" });

  const baseUrl = "http://localhost:3001/usuarios";

  useEffect(() => {
    getUsers();
  }, []);

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
        const updatedUser = { ...currentUser, Name, Email, Role, Grade: Role === "estudiante" ? Grade : "" };
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
        const newUser = { Name, Email, Role, Grade: Role === "Estudiante" ? Grade : "" };
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
    setName(userToEdit.Name);
    setEmail(userToEdit.Email);
    setRole(userToEdit.Role);
    setGrade(userToEdit.Grade);
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

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    if (event.target.value !== "Estudiante") {
      setGrade("");
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setRole("");
    setGrade("");
    setEditing(false);
    setCurrentUser({ id: null, Name: "", Email: "", Role: "admin", Grade: "" });
  };

  return (
    <Fragment>
      <Container>
        <h1 className="my-5">Administracion de usuarios</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={Name} onChange={(event) => setName(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={Email} onChange={(event) => setEmail(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Control as="select" value={Role} onChange={handleRoleChange}>
              <option value="admin">Admin</option>
              <option value="estudiante">Estudiante</option>
              <option value="profesor">Profesor</option>
            </Form.Control>
          </Form.Group>
          {Role === "estudiante" && (
            <Form.Group className="mb-3">
              <Form.Label>Curso</Form.Label>
              <Form.Control type="text" value={Grade} onChange={(event) => setGrade(event.target.value)} />
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
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Role}</td>
                <td>{user.Grade}</td>
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
    </Fragment>
  );
};

export default UserPage;
