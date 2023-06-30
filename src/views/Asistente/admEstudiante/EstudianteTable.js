import React from 'react';

const EstudianteTable = ({ estudiantes, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>Fecha de Nacimiento</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {estudiantes.map((estudiante) => (
          <tr key={estudiante._id}>
            <td>{estudiante.nombres}</td>
            <td>{estudiante.apellido_paterno}</td>
            <td>{estudiante.apellido_materno}</td>
            <td>{estudiante.fecha_nacimiento}</td>
            <td>{estudiante.email}</td>
            <td>
              <button type="button" onClick={() => onEdit(estudiante)}>Editar</button>
              <button type="button" onClick={() => onDelete(estudiante._id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EstudianteTable;
