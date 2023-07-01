import React from "react";
import {
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBBtn,
  CDBBtnGrp,
  CDBContainer,
} from "cdbreact";

const TablaDia = ({ dias, onDelete, onEdit }) => {
  return (
    <CDBContainer>
      <CDBTable responsive>
        <CDBTableHeader>
          <tr>
            <th>ID_dia</th>
            <th>Nombre Dia</th>
            <th>Acciones</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          
          {dias.map((dia) => (
            <tr key={dia._id}>
              <td>{dia.id_dia}</td>
              <td>{dia.nombre_dia}</td>
              <td>
                <CDBBtnGrp size="sm">
                  <CDBBtn color="secondary" onClick={() => onEdit(dia)}>
                    Editar
                  </CDBBtn>
                  <CDBBtn
                    color="danger"
                    onClick={() => onDelete(dia._id)}
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

export default TablaDia;
