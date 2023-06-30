import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, Row, Col } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import LoginEstudiante from "./TiposUsuario/loginEstudiante";
import LoginProfesor from "./TiposUsuario/loginProfesor";
import LoginAsistente from "./TiposUsuario/loginAsistente";
import LoginDirector from "./TiposUsuario/loginDirector";

const Login = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [componenteRenderizado, setComponenteRenderizado] = useState(null);

  // Función para manejar el cambio de selección
  const handleSeleccionChange = (event) => {
    const opcion = event.target.value;
    setOpcionSeleccionada(opcion);

    // Renderizar el componente correspondiente a la opción seleccionada
    if (opcion === "estudiante") {
      setComponenteRenderizado(<LoginEstudiante />);
    } else if (opcion === "Profesor") {
      setComponenteRenderizado(<LoginProfesor />);
    } else if (opcion === "Asistente") {
      setComponenteRenderizado(<LoginAsistente />);
    } else if (opcion === "Director") {
      setComponenteRenderizado(<LoginDirector />);
    } else {
      setComponenteRenderizado(null);
    }
  };

  return (
    <div>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div>
            <Container>
      <Row>
        <Col>
          <h1 className="text-center">Bienvenido a Nuevos Horizontes</h1>
        </Col>
      </Row>
    </Container>
              <div className="d-flex justify-content-center">
                <Form.Select
                  value={opcionSeleccionada}
                  onChange={handleSeleccionChange}
                >
                  <option value="">Seleccionar Tipo de Usuario</option>
                  <option value="estudiante">Estudiante</option>
                  <option value="Profesor">Profesor</option>
                  <option value="Asistente">Asistente</option>
                  <option value="Director">Director</option>
                </Form.Select>
              </div>
              {/* Renderizar el componente seleccionado */}
              {componenteRenderizado}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
