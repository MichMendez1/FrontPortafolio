import React, { useState, useEffect } from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer, CDBSelect } from 'cdbreact';
import { validarRut } from './rutUtils';

const ProfesorForm = ({ onSave, profesorEdit }) => {
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
  const [emailError, setEmailError] = useState(false);
  const [confirmRegister, setConfirmRegister] = useState(false);
  
  const [errors, setErrors] = useState([]);
  const [profesorID, setProfesorID] = useState('');
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
  const [asignatura, setAsignatura] = useState('');
  const [tipo, setTipo] = useState('Profesor');

  useEffect(() => {
    if (profesorEdit) {
      setProfesorID(profesorEdit.profesorID || '');
      setCursoID(profesorEdit.cursoID || '');
      setNombres(profesorEdit.nombres || '');
      setApellidoPaterno(profesorEdit.apellido_paterno || '');
      setApellidoMaterno(profesorEdit.apellido_materno || '');
      setFechaNacimiento(profesorEdit.fecha_nacimiento || '');
      setNacionalidad(profesorEdit.nacionalidad || '');
      setDireccion(profesorEdit.direccion || '');
      setEmail(profesorEdit.email || '');
      setPassword(profesorEdit.password || '');
      setGenero(profesorEdit.genero || '');
      setRut(profesorEdit.rut || '');
      setTelefono(profesorEdit.telefono || '');
      setAsignatura(profesorEdit.asinatura || '');
      setTipo(profesorEdit.tipo || 'Profesor');
    }
  }, [profesorEdit]);


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
    if (!asignatura) {
      validationErrors.push('El campo Asignatura es requerido.');
    }
    setErrors(validationErrors);
    if (!validarRut(rut)) {
      validationErrors.push('El RUT no es Válido');
    }

    if (validationErrors.length === 0) {
      const profesor = {
        profesorID,
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
        asignatura,
        tipo,
      };

      
      if (profesorEdit && profesorEdit._id) {
        // Actualizar profesor existente
        profesor._id = profesorEdit._id;
        onSave(profesor);
      } else {
        // Guardar nuevo profesor
        onSave(profesor);
      }

      // Mostrar mensaje de éxito o redireccionar
      alert('Profesor registrado exitosamente');
    }
  };



  return (
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <form onSubmit={handleSubmit}>
            <div className="text-center mt-4 mb-2">
              <p className="h4">Administración de Profesores</p>
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
              ID Profesor
            </label>
            <CDBInput
              value={profesorID}
              onChange={(e) => setProfesorID(e.target.value)}
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
              value={asignatura}
              onChange={(e) => setAsignatura(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterasignatura" className="text-muted m-0">
              Asignatura
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
              Registrar
            </CDBBtn>
          </form>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default ProfesorForm;
