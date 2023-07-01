import React, { useState, useEffect } from 'react';
import ProfesorForm from './ProfesorForm';
import ProfesorTable from './ProfesorTable';
import URL from '../../Url';
import Sidebar from '../components/Sidebar/Sidebar';
import "../asistencia.scss"

const ProfesorApp = () => {
  const [profesores, setProfesores] = useState([]);
  const [profesorEdit, setProfesorEdit] = useState(null);

  useEffect(() => {
    obtenerProfesores();
  }, []);

  const obtenerProfesores = async () => {
    try {
      const response = await fetch( URL+'/api/profesores/usuarios');
      if (response.ok) {
        const data = await response.json();
        setProfesores(data);
      } else {
        console.log('Error al obtener los profesores');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const guardarProfesor = async (profesor) => {
    try {
      const response = await fetch( URL+'/api/profesores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profesor),
      });

      if (response.ok) {
        const data = await response.json();
        setProfesores([...profesores, data]);
      } else {
        console.log('Error al guardar el profesor');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarProfesor = async (profesorId) => {
    try {
      const response = await fetch( URL+ `/api/profesores/eliminar/${profesorId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProfesores(profesores.filter((profesor) => profesor._id !== profesorId));
      } else {
        console.log('Error al eliminar el profesor');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editarProfesor = (profesor) => {
    setProfesorEdit(profesor);
  };

  const cancelarEdicion = () => {
    setProfesorEdit(null);
  };

  const actualizarProfesor = async (profesor) => {
    try {
      const response = await fetch( URL+ `/api/profesores/editar/${profesor._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profesor),
      });

      if (response.ok) {
        const data = await response.json();
        const updatedProfesores = profesores.map((est) => {
          if (est._id === profesor._id) {
            return data;
          }
          return est;
        });
        setProfesores(updatedProfesores);
        setProfesorEdit(null);
      } else {
        console.log('Error al actualizar el profesor');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="asistencia-container" >
      <Sidebar></Sidebar>
      <div style={{alignItems: "center"}}>
        <div style={{paddingLeft: "20%"}}>
        {profesorEdit ? (
        <ProfesorForm
          profesor={profesorEdit}
          onSave={actualizarProfesor}
          onCancel={cancelarEdicion}
        />
      ) : (
        <ProfesorForm onSave={guardarProfesor} />
      )}
        </div>
      
      <ProfesorTable
        profesores={profesores}
        onDelete={eliminarProfesor}
        onEdit={editarProfesor}
      />
      </div>
    </div>
  );
};

export default ProfesorApp;
