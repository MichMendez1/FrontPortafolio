import React, { useEffect, useState } from "react";

const Horarios = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const cursoId = user?.CursoID;

  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        const timestamp = Date.now();

        const response = await fetch(`http://localhost:3001/horarios?timestamp=${timestamp}`)
        if (response.ok) {
          const data = await response.json();
  
          // Filtras los horarios por CursoID
          const horariosFiltrados = data.Horarios.filter(
            (horario) => horario.CursoID === cursoId
          );
  
          // Agrupas los horarios por día y los ordenas por hora de inicio
          const gruposHorarios = {};
          horariosFiltrados.forEach((horario) => {
            const dia = horario.Dia;
            if (!gruposHorarios[dia]) {
              gruposHorarios[dia] = [];
            }
            gruposHorarios[dia].push(horario);
          });
          for (const dia in gruposHorarios) {
            gruposHorarios[dia].sort((a, b) =>
              a.HoraInicio.localeCompare(b.HoraInicio)
            );
          }
  
          setHorarios(gruposHorarios);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error:", error);
        // Manejo de errores en la solicitud
      }
    };
  
    fetchHorarios();
  }, [cursoId]);

  return (
    <div className="container">
      {Object.keys(horarios).map((dia) => (
        <div key={dia} className="card mb-3">
          <div className="card-header">{dia}</div>
          <div className="card-body">
            {horarios[dia].map((horario) => (
              <div key={horario.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">{horario.Asignatura}</h5>
                  <p className="card-text">
                    {horario.HoraInicio} - {horario.HoraFinalizacion}
                  </p>
                  <p className="card-text">
                    Profesor: {horario.ProfesorAsignado}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Horarios;
