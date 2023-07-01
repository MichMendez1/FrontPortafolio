import React, { useState, useEffect } from 'react';
import Form from './Form';
import Tabla from './Tabla';
import URL from '../../Url';
import { react } from '@babel/types';

const RegistrarAnno = () => {
  const [annos, setAnnos] = useState([]);
  const [annoEdit, setAnnoEdit] = useState(null);
  const [vista,setVista]=useState(0)

  useEffect(() => {
    obtenerAnnos();
  }, []);

  const obtenerAnnos = async () => {
    try {
      const response = await fetch( URL+'/api/annos');
      if (response.ok) {
        const data = await response.json();
        setAnnos(data);
      } else {
        console.log('Error al obtener los annos');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const guardarAnno = async (anno) => {
    try {
      const response = await fetch( URL+'/api/annos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(anno),
      });

      if (response.ok) {
        const data = await response.json();
        setAnnos([...annos, data]);
      } else {
        console.log('Error al guardar el anno');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarAnno = async (annoId) => {
    try {
      const response = await fetch( URL+ `/api/annos/eliminar/${annoId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setAnnos(annos.filter((anno) => anno._id !== annoId));
      } else {
        console.log('Error al eliminar el anno');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editarAnno = (anno) => {
    
    setAnnoEdit(anno);
    console.log(anno);
    setVista(1)
  };

  const cancelarEdicion = () => {
    setAnnoEdit(null);
  };

  const actualizarAnno = async (anno) => {
    try {
      const response = await fetch( URL+ `/api/annos/editar/${anno._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(anno),
      });

      if (response.ok) {
        const data = await response.json();
        const updatedAnnos = annos.map((est) => {
          if (est._id === anno._id) {
            return data;
          }
          return est;
        });
        setAnnos(updatedAnnos);
        setAnnoEdit(null);
      } else {
        console.log('Error al actualizar el anno');
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
        <Form
          annoEdit={annoEdit}
          onSave={actualizarAnno}
          onCancel={cancelarEdicion}
        />
      )}
      
    </div>)
    }
    else{
      return(
        <div>
          <button className='btn btn-primary' onClick={()=>setVista(1)} >Registar</button>
          <Tabla
        annos={annos}
        onDelete={eliminarAnno}
        onEdit={editarAnno}
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

export default RegistrarAnno;
