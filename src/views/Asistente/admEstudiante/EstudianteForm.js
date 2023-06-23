import React, { useState } from 'react';

const EstudianteForm = ({ onSave }) => {
    const [cursoID, setCursoID] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [genero, setGenero] = useState('');
    const [rut, setRut] = useState('');
    const [telefono, setTelefono] = useState('');
    const [tipo, setTipo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar validaciones necesarias

    const estudiante = {
        cursoID,
        nombres,
        apellido_paterno: apellidoPaterno,
        apellido_materno: apellidoMaterno,
        fecha_nacimiento: fechaNacimiento,
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
  };

  return (
   <form onSubmit={handleSubmit}>
      <label>
        Curso ID:
        <input type="text" value={cursoID} onChange={(e) => setCursoID(e.target.value)} />
      </label>
      <label>
        Nombres:
        <input type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} />
      </label>
      <label>
        Apellido Paterno:
        <input
          type="text"
          value={apellidoPaterno}
          onChange={(e) => setApellidoPaterno(e.target.value)}
        />
      </label>
      <label>
        Apellido Materno:
        <input
          type="text"
          value={apellidoMaterno}
          onChange={(e) => setApellidoMaterno(e.target.value)}
        />
      </label>
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
        />
      </label>
      <label>
        Nacionalidad:
        <input
          type="text"
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
        />
      </label>
      <label>
        Dirección:
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Género:
        <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
      </label>
      <label>
        Rut:
        <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} />
      </label>
      <label>
        Teléfono:
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
      <label>
        Tipo:
        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EstudianteForm;
