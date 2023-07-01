import React from "react";
import {
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBBtn,
  CDBBtnGrp,
  CDBContainer,
} from "cdbreact";

const ProfesorTable = ({ profesores, onDelete, onEdit }) => {
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
          {profesores.map((profesor) => (
            <tr key={profesor._id}>
              <td>{profesor.nombres}</td>
              <td>{profesor.apellido_paterno}</td>
              <td>{profesor.apellido_materno}</td>
              <td>{profesor.fecha_nacimiento}</td>
              <td>{profesor.email}</td>
              <td>
                <CDBBtnGrp size="sm">
                  <CDBBtn color="light" onClick={() => onEdit(profesor)}>
                    Editar
                  </CDBBtn>
                  <CDBBtn
                    color="warning"
                    onClick={() => onDelete(profesor._id)}
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

export default ProfesorTable;
