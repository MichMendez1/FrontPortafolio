import React, { useState, useEffect } from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer, CDBSelect } from 'cdbreact';


const Form = ({ annoEdit, onSave  }) => {
 

  const [errors, setErrors] = useState([]);
  const [id_anno, setId_anno] = useState('');
  const [anno, setAnno] = useState('');


  useEffect(() => {
    
    annoEdit ? setAnno(annoEdit) : setAnno(null);
    console.log("hola");
    
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar validaciones necesarias
    const validationErrors = [];

    if (!id_anno) {
      validationErrors.push('El campo es requerido.');
    }

    if (!anno) {
      validationErrors.push('El campo es requerido.');
    }

      
      if (annoEdit && annoEdit._id) {
        // Actualizar anno existente
        anno._id = annoEdit._id;
        onSave(anno);
      } else {
        // Guardar nuevo anno
        onSave(anno);
      }

      // Mostrar mensaje de éxito o redireccionar
      alert('año registrado exitosamente');
    }
  


  return (
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <form onSubmit={handleSubmit}>
            <div className="text-center mt-4 mb-2">
              <p className="h4">Registrar Año</p>
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
              ID Año
            </label>
            <CDBInput
              value={id_anno}
              onChange={(e) => setId_anno(e.target.value)}
              className="mt-n3"
              type="text"
            />
            <label htmlFor="defaultRegisterCurso" className="text-muted m-0">
              Año
            </label>
            <CDBInput
              value={id_anno}
              onChange={(e) => setId_anno(e.target.value)}
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


export default Form;
