import React, { useState } from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer, CDBSelect } from 'cdbreact';
import { validarRut } from './rutUtils';

const EstudianteForm = ({ onSave }) => {
  const option = [
    {
      text: 'Femenino',
      value: '1',
    },
    {
      text: 'Masculino',
      value: '2',
    }
  ];

  const [errors, setErrors] = useState([]);
  const [alumnoID, setAlumnoID] = useState('');
  const [cursoID, setCursoID] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellido_paterno, setApellidoPaterno] = useState('');
  const [apellido_materno, setApellidoMaterno] = useState('');
  const [fecha_nacimiento, setFechaNacimiento] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [genero, setGenero] = useState('');
  const [rut, setRut] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipo, setTipo] = useState('Estudiante');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar validaciones necesarias
    const validationErrors = [];

    if (!cursoID) {
      validationErrors.push('El campo ID Curso es requerido.');
    }

    if (!nombres) {
      validationErrors.push('El campo Nombres es requerido.');
    }

    if (!apellido_paterno) {
      validationErrors.push('El campo Apellido Paterno es requerido.');
    }

    if (!fecha_nacimiento) {
      validationErrors.push('El campo Fecha de Nacimiento es requerido.');
    }

    if (!nacionalidad) {
      validationErrors.push('El campo Nacionalidad es requerido.');
    }

    if (!direccion) {
      validationErrors.push('El campo Dirección es requerido.');
    }

    if (!email) {
      validationErrors.push('El campo Email es requerido.');
    }

    if (!password) {
      validationErrors.push('El campo Contraseña es requerido.');
    }

    if (!genero) {
      validationErrors.push('El campo Género es requerido.');
    }

    if (!rut) {
      validationErrors.push('El campo Rut es requerido.');}

    if (!telefono) {
      validationErrors.push('El campo Teléfono es requerido.');
    }

    setErrors(validationErrors);
    if (!validarRut(rut)) {
      validationErrors.push('El RUT no es Válido');
    }

    if (validationErrors.length === 0) {
      const estudiante = {
        alumnoID,
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
        telefono,
        tipo,
      };

      onSave(estudiante);
      // Mostrar mensaje de éxito o redireccionar
      alert('Estudiante registrado exitosamente');
    }
  };



  return (
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <form onSubmit={handleSubmit}>
            <div className="text-center mt-4 mb-2">
              <p className="h4">Administración de Alumnos</p>
            </div>
            {errors.length > 0 && (
              <div className="alert alert-danger">
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <label htmlFor="defaultRegisterCurso" className="text-muted m-0">
              ID Alumno
            </label>
            <CDBInput
              value={alumnoID}
              onChange={(e) => setAlumnoID(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterCurso" className="text-muted m-0">
              ID Curso
            </label>
            <CDBInput
              value={cursoID}
              onChange={(e) => setCursoID(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterNombres" className="text-muted m-0">
              Nombres
            </label>
            <CDBInput
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterapellidoP" className="text-muted m-0">
              Apellido Paterno
            </label>
            <CDBInput
              value={apellido_paterno}
              onChange={(e) => setApellidoPaterno(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterapellidoM" className="text-muted m-0">
              Apellido Materno
            </label>
            <CDBInput
              value={apellido_materno}
              onChange={(e) => setApellidoMaterno(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterFN" className="text-muted m-0">
              Fecha de Nacimiento
            </label>
            <CDBInput
              value={fecha_nacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              className="mt-n3"
              type="date"
            />
            <label htmlFor="defaultRegisterNacionalidad" className="text-muted m-0">
              Nacionalidad
            </label>
            <CDBInput
              value={nacionalidad}
              onChange={(e) => setNacionalidad(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterDireccion" className="text-muted m-0">
              Dirección
            </label>
            <CDBInput
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterEmail" className="text-muted m-0">
              Email
            </label>
            <CDBInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-n3"
              type="email"
            />
            <label htmlFor="defaultRegisterpassword" className="text-muted m-0">
              Contraseña
            </label>
            <CDBInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-n3"
              type="password"
            />
            <label htmlFor="defaultRegistergenero" className="text-muted m-0">
              Género
            </label>
            <br></br>
            <CDBSelect
              color="white"
              options={option}
              selected="Otro"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
            <br></br>
            <label htmlFor="defaultRegisterrut" className="text-muted m-0">
              Rut
            </label>
            <CDBInput
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegistertelefono" className="text-muted m-0">
              Teléfono
            </label>
            <CDBInput
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <CDBBtn
              type="submit"
              color="danger"
              style={{ width: '40%' }}
              className="btn-block mt-5 mx-auto"
            >
              Register
            </CDBBtn>
          </form>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default EstudianteForm;
