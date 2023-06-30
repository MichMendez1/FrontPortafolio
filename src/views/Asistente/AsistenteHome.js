import React, { useEffect, useState } from "react";
import URL from "../Url";
import Sidebar from "./components/Sidebar/Sidebar";
import "./asistencia.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
const AdminPage = () => {
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [totalProfesores, setTotalProfesores] = useState(0);
  const [totalEstudiantes, setTotalEstudiantes] = useState(0);
  const user = JSON.parse(sessionStorage.getItem('user'));
  const { nombres, apellido_paterno, apellido_materno, email, direccion, telefono, tipo, genero, cursoID } = user || {}
  useEffect(() => {
    fetch(URL + "/api/asistentes/usuarios")
      .then((response) => response.json())
      .then((data) => {
        setTotalUsuarios(data.totalUsuarios);
        setTotalProfesores(data.totalProfesores);
        setTotalEstudiantes(data.totalEstudiantes);
      })
      .catch((error) => {
        console.log(error);
        // Manejar el error en caso de que ocurra
      });
  }, []);

  return (
    <div className="asistencia-container">
      <Sidebar></Sidebar>
      <div style={{ paddingLeft: "20%", paddingTop: "6%" }}>
        <MDBCard alignment="center">
          <MDBCardHeader>Destacado</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Bienvenido al panel de asistente, {nombres} </MDBCardTitle>
            <MDBCardText>
            <div id="usuariosContainer">
          <h5>Usuarios Registrados:</h5>
          <p>Total: {totalUsuarios}</p>
          <p>Profesores: {totalProfesores}</p>
          <p>Estudiantes: {totalEstudiantes}</p>
        </div>
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className="text-muted">Actualizado hace unos segundos...</MDBCardFooter>
        </MDBCard>

       
      </div>
    </div>
  );
};

export default AdminPage;
