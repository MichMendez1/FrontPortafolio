import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import TablaDia from './Tabla';
import URL from  '../../Register/Url';

const DiaApp = () => {
  const [dias, setDias] = useState([]);
  const [diaEdit, setDiaEdit] = useState(null);
  const [vista,setVista]=useState(0);

  useEffect(() => {
    obtenerDias();
  }, []);

  const obtenerDias = async () => {
    try {
      const response = await fetch( URL+'/api/dias');
      if (response.ok) {
        const data = await response.json();
        setDias(data);
      } else {
        console.log('Error al obtener los Dias');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const guardarDia = async (dia) => {
    try {
      const response = await fetch( URL+'/api/dias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dia),
      });

      if (response.ok) {
        const data = await response.json();
        setDias([...dias, data]);
      } else {
        console.log('Error al guardar el dia');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarDia = async (id_dia) => {
    try {
      const response = await fetch( URL+ `/api/dias/eliminar/${id_dia}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDias(dias.filter((dia) => dia._id !== id_dia));
      } else {
        console.log('Error al eliminar el dia');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editarDia = (dia) => {
    setDiaEdit(dia);
    console.log(dia);
    setVista(1)
  };

  const cancelarEdicion = () => {
    setDiaEdit(null);
  };

  const actualizarDia = async (dia) => {
    try {
      const response = await fetch( URL+ `/api/dias/editar/${dia._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dia),
      });

      if (response.ok) {
        const data = await response.json();
        const updatedDias = dias.map((est) => {
          if (est._id === dia._id) {
            return data;
          }
          return est;
        });
        setDias(updatedDias);
        setDiaEdit(null);
      } else {
        console.log('Error al actualizar el dia');
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
        <Formulario
          diaEdit={diaEdit}
          onSave={actualizarDia}
          onCancel={cancelarEdicion}
        />
      )}
      
    </div>)
    }
    else{
      return(
        <div>
          <button className='btn btn-primary' onClick={()=>setVista(1)} >Registar</button>
          <TablaDia
        dias={dias}
        onDelete={eliminarDia}
        onEdit={editarDia}
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
//   return (
//     <div>
//       {diaEdit ? (
//         <Formulario
//           dia={diaEdit}
//           onSave={actualizarDia}
//           onCancel={cancelarEdicion}
//         />
//       ) : (
//         <Formulario onSave={guardarDia} />
//       )}
//       <TablaDia
//         dias={dias}
//         onDelete={eliminarDia}
//         onEdit={editarDia}
//       />
//     </div>
//   );
// };

export default DiaApp;
