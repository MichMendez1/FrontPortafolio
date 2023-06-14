import React, { useEffect, useState } from 'react';

const ProfesoresPage = () => {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    // Obtener los datos de los profesores desde la API
    fetch('http://localhost:3001/profesores')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProfesores(data);
        } else {
          console.error('Los datos de los profesores no son un array válido.');
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Nuestro Equipo</h1>
      <div className="row">
        {profesores.map(profesor => (
          <div className="col-md-4" key={profesor.ProfesorID}>
            <div className="card">
              <img src={profesor.UrlFoto} alt={profesor.Nombre} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h3 className="card-title">{profesor.Nombre} {profesor.Apellido_Paterno}</h3>
                <p className="card-text">{profesor.Desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfesoresPage;
