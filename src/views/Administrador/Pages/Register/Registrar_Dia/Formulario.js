import React, { useState, useEffect } from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from 'cdbreact';


const Formulario= ({  diaEdit,onSave }) => {
  
  const [Dia,setDia]=useState(null)
  const [errors, setErrors] = useState([]);
  const [id_dia, setId_dia] = useState('');
  const [nombre_dia, setNombre_dia] = useState('');


  useEffect(() => {
    
    diaEdit ? setDia(diaEdit) : setDia(null);
    console.log("Editado");
    
  });


  const handleSubmit = (e) => {
    e.preventDefault();


    const validationErrors = [];

    if (!id_dia) {
      validationErrors.push('El campo ID dia es requerido.');
    }

    if (!nombre_dia) {
      validationErrors.push('El campo Nombre dia es requerido.');
    }


    if (validationErrors.length === 0) {
      const dia = {
        id_dia,
        nombre_dia,
      };

      
      if (diaEdit && diaEdit._id) {

        dia._id = diaEdit._id;
        onSave(dia);
      } else {

        onSave(dia);
      }

   
      alert('Dia registrado');
    }
  };



  return (
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <form onSubmit={handleSubmit}>
            <div className="text-center mt-4 mb-2">
              <p className="h4">Registrar Dia</p>
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
            <label htmlFor="defaultRegisterDia" className="text-muted m-0">
              ID Dia
            </label>
            <CDBInput
              value={id_dia}
              onChange={(e) => setId_dia(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterDia" className="text-muted m-0">
              Nombre Dia
            </label>
            <CDBInput
              value={nombre_dia}
              onChange={(e) => setNombre_dia(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <CDBBtn
              type="submit"
              color="success"
              style={{ width: '40%' }}
              className="btn-block mt-5 mx-auto"
            >
              Registrar Dia
            </CDBBtn>
          </form>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default Formulario;
