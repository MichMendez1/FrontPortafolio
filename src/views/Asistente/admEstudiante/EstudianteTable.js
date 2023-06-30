import React from "react";
import {
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBBtn,
  CDBBtnGrp,
  CDBContainer,
} from "cdbreact";

const EstudianteTable = ({ estudiantes, onDelete, onEdit }) => {
  return (
    <CDBContainer>
      
      <CDBTable responsive>
        <CDBTableHeader>
          <tr>
            <th>Nombres</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Fecha de Nacimiento</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante._id}>
              <td>{estudiante.nombres}</td>
              <td>{estudiante.apellido_paterno}</td>
              <td>{estudiante.apellido_materno}</td>
              <td>{estudiante.fecha_nacimiento}</td>
              <td>{estudiante.email}</td>
              <td>
                <CDBBtnGrp size="sm">
                  <CDBBtn color="light" onClick={() => onEdit(estudiante)}>
                    Editar
                  </CDBBtn>
                  <CDBBtn
                    color="warning"
                    onClick={() => onDelete(estudiante._id)}
                  >
                    Eliminar
                  </CDBBtn>
                </CDBBtnGrp>
              </td>
            </tr>
          ))}
        </CDBTableBody>
      </CDBTable>
    </CDBContainer>
  );
};

export default EstudianteTable;
