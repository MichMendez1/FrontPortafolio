import React, { useState, useEffect } from 'react';
import EstudianteForm from './EstudianteForm';
import EstudianteTable from './EstudianteTable';
import URL from '../../Url';
import Sidebar from '../components/Sidebar/Sidebar';
import "../asistencia.scss"

const EstudianteApp = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudianteEdit, setEstudianteEdit] = useState(null);

  useEffect(() => {
    obtenerEstudiantes();
  }, []);

  const obtenerEstudiantes = async () => {
    try {
      const response = await fetch( URL+'/api/estudiantes/usuarios');
      if (response.ok) {
        const data = await response.json();
        setEstudiantes(data);
      } else {
        console.log('Error al obtener los estudiantes');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const guardarEstudiante = async (estudiante) => {
    try {
      const response = await fetch( URL+'/api/estudiantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(estudiante),
      });

      if (response.ok) {
        const data = await response.json();
        setEstudiantes([...estudiantes, data]);
      } else {
        console.log('Error al guardar el estudiante');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarEstudiante = async (estudianteId) => {
    try {
      const response = await fetch( URL+ `/api/estudiantes/eliminar/${estudianteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setEstudiantes(estudiantes.filter((estudiante) => estudiante._id !== estudianteId));
      } else {
        console.log('Error al eliminar el estudiante');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editarEstudiante = (estudiante) => {
    setEstudianteEdit(estudiante);
  };

  const cancelarEdicion = () => {
    setEstudianteEdit(null);
  };

  const actualizarEstudiante = async (estudiante) => {
    try {
      const response = await fetch( URL+ `/api/estudiantes/editar/${estudiante._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(estudiante),
      });

      if (response.ok) {
        const data = await response.json();
        const updatedEstudiantes = estudiantes.map((est) => {
          if (est._id === estudiante._id) {
            return data;
          }
          return est;
        });
        setEstudiantes(updatedEstudiantes);
        setEstudianteEdit(null);
      } else {
        console.log('Error al actualizar el estudiante');
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
        {estudianteEdit ? (
        <EstudianteForm
          estudiante={estudianteEdit}
          onSave={actualizarEstudiante}
          onCancel={cancelarEdicion}
        />
      ) : (
        <EstudianteForm onSave={guardarEstudiante} />
      )}
        </div>
      
      <EstudianteTable
        estudiantes={estudiantes}
        onDelete={eliminarEstudiante}
        onEdit={editarEstudiante}
      />
      </div>
    </div>
  );
};

export default EstudianteApp;
