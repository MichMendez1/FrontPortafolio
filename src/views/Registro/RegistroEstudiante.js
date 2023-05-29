import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

function RegistroEstudiante() {
  const [CursoID, setCursoID] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Apellido_Paterno, setApellido_Paterno] = useState("");
  const [Apellido_Materno, setApellido_Materno] = useState("");
  const [Fecha_Nacimiento, setFecha_Nacimiento ] = useState("");
  const [Colegio_De_Procedencia, setColegio_De_Procedencia ] = useState("");
  const [Nacionalidad, setNacionalidad ] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Correo, setCorreo ] = useState("");
  const [Contraseña, setContraseña ] = useState("");
  const [Genero, setGenero ] = useState("");
  const [Rut, setRut] = useState("");
  const [Tipo, setTipo ] = useState("Estudiante");
const baseUrl="http://localhost:3001/estudiantes";
const handleLogin=()=>{
  window.location.href="/login"
}
  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {
      // Check if the email already exists
      const response = await fetch(`${baseUrl}?Correo=${Correo}`);
      if (response.ok) {
        const users = await response.json();
  
        if (users.length > 0) {
          // Email already exists, show an error message
          alert('Correo ya registrado');
          return;
        }
  
        // Proceed with creating a new user
        const hashedPassword = await bcrypt.hash(Contraseña, 10);
        
        const userData = {
          AlumnoID: uuidv4(),CursoID,Nombre, Apellido_Paterno,Apellido_Materno, Fecha_Nacimiento, Colegio_De_Procedencia,Nacionalidad,Direccion,Correo,Contraseña: hashedPassword, Genero, Rut,Tipo
        };
  
        const createUserResponse = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (createUserResponse.ok) {
          alert('Usuario registrado correctamente');
          // Reset the form fields
            setCursoID("");
            setNombre("");
            setApellido_Paterno("");
            setApellido_Materno("");
            setFecha_Nacimiento ("");
            setColegio_De_Procedencia ("");
            setNacionalidad ("");
            setDireccion("");
            setCorreo ("");
            setContraseña("");
            setGenero("");
            setRut("");
            setTipo("Estudiante");
          window.location.href="./login"
        } else {
          throw new Error(`HTTP error! status: ${createUserResponse.status}`);
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    }
    
  };

  return (
    <div className="container mt-5">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <div className="mb-3">
          <label htmlFor="CursoID" className="form-label">
            Curso ID
          </label>
          <input
            type="text"
            className="form-control"
            id="CursoID"
            value={CursoID}
            onChange={(e) => setCursoID(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="Nombre"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Apellido_Paterno" className="form-label">
            Apellido Paterno
          </label>
          <input
            type="text"
            className="form-control"
            id="Apellido_Paterno"
            value={Apellido_Paterno}
            onChange={(e) => setApellido_Paterno(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Apellido_Materno" className="form-label">
            Apellido Materno
          </label>
          <input
            type="text"
            className="form-control"
            id="Apellido_Materno"
            value={Apellido_Materno}
            onChange={(e) => setApellido_Materno(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Fecha_Nacimiento" className="form-label">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            className="form-control"
            id="Fecha_Nacimiento"
            value={Fecha_Nacimiento}
            onChange={(e) => setFecha_Nacimiento(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Colegio_De_Procedencia" className="form-label">
            Colegio de Procedencia
          </label>
          <input
            type="text"
            className="form-control"
            id="Colegio_De_Procedencia"
            value={Colegio_De_Procedencia}
            onChange={(e) => setColegio_De_Procedencia(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Nacionalidad" className="form-label">
            Nacionalidad
          </label>
          <input
            type="text"
            className="form-control"
            id="Nacionalidad"
            value={Nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Direccion" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="Direccion"
            value={Direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Correo" className="form-label">
            Correo
          </label>
          <input
            type="text"
            className="form-control"
            id="Correo"
            value={Correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Contraseña" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="Contraseña"
            value={Contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Genero" className="form-label">
            Género
          </label>
          <input
            type="text"
            className="form-control"
            id="Genero"
            value={Genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Rut" className="form-label">
            Rut
          </label>
          <input
            type="text"
            className="form-control"
            id="Rut"
            value={Rut}
            onChange={(e) => setRut(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
        <button
          variant="outline-light"
          className="btn btn-tertiary"
          onClick={handleLogin}
          style={{ marginTop: "1%" }}
        >
          Iniciar sesión{" "}
        </button>
      </form>
    </div>
  );
}

export default RegistroEstudiante;
