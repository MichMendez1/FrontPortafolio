import React from "react";
import {
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBBtn,
  CDBBtnGrp,
  CDBContainer,
} from "cdbreact";

const Tabla = ({ annos, onDelete, onEdit }) => {
  return (
    <CDBContainer>
      
      <CDBTable responsive>
        <CDBTableHeader>
          <tr>
            <th>ID Año</th>
            <th>Año</th>
 
            <th>Acciones</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          {annos.map((anno) => (
            <tr key={anno._id}>
              <td>{anno}</td>

              <td>
                <CDBBtnGrp size="sm">
                  <CDBBtn color="light" onClick={() => onEdit(anno)}>
                    Editar
                  </CDBBtn>
                  <CDBBtn
                    color="warning"
                    onClick={() => onDelete(anno._id)}
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

export default Tabla;
