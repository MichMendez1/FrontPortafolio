import React, { useState, useEffect } from 'react';
import EstudianteForm from './EstudianteForm';
import EstudianteTable from './EstudianteTable';
import URL from '../../Url';
import { react } from '@babel/types';

const EstudianteApp = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudianteEdit, setEstudianteEdit] = useState(null);
  const [vista,setVista]=useState(0)

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
    console.log(estudiante);
    setVista(1)
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

  const Render0 =()=>{
    if(vista == 1){
      return(
      <div>
      {(
        <EstudianteForm
          estudianteEdit={estudianteEdit}
          onSave={actualizarEstudiante}
          onCancel={cancelarEdicion}
        />
      )}
      
    </div>)
    }
    else{
      return(
        <div>
          <button className='btn btn-primary' onClick={()=>setVista(1)} >Registar</button>
          <EstudianteTable
        estudiantes={estudiantes}
        onDelete={eliminarEstudiante}
        onEdit={editarEstudiante}
      />
        </div>
      )
    }
  }

  return (
    <div>
      <Render0></Render0>
    </div>
  );
};

export default EstudianteApp;
