import "../login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import URL from "../../Url";


const LoginAsistente = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        URL+"/api/asistentes/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Autenticación exitosa");
        console.log("Token:", data.token);
        setError("");

        // Guardar usuario en sessionStorage
        sessionStorage.setItem("user", JSON.stringify(data));
        console.log(data.nombres); // Acceder al atributo 'nombres' del usuario
        console.log(data.tipo);
        // Redireccionar a la página deseada
        navigate("/homeasistente");
      } else {
        console.log("Autenticación fallida");
        console.log("Mensaje de error:", data.msg);
        setError(data.msg);
      }
    } catch (error) {
      console.log("Error:", error);
      setError("Ocurrió un error en el servidor");
    }
  };

  return (
    <div>
      <MDBContainer fluid className="p-3 my-5">
    
            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Ingrese su Correo electrónico"
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <MDBInput
                wrapperClass="mb-4"

                  label="Ingrese su Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Recordarme"
                />
              </div>

              <MDBBtn className="mb-4 w-100" size="lg">
                Ingresar
              </MDBBtn>
            </form>
            {error && <p>{error}</p>}
      </MDBContainer>
    </div>
  );
};

export default LoginAsistente;
