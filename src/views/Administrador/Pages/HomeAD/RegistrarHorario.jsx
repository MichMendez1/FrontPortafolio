import React from 'react';
import { MDBBadge, MDBBtn, MDBListGroup, MDBListGroupItem, MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import SidebarAdm from "../../components/Sidebar/SidebarAdm";

export default function App() {
  return (
    <div className="asistencia-container" >
      <SidebarAdm />
      <div className="container" >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                </MDBCol>
                
                <MDBListGroup style={{ minWidth: '22rem' }} light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Registrar Asignatura</p>
                      </div>
                    </div>
                    <MDBBtn tag='a' href='./registrarsasignatura'>
                      Asignatura
                    </MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBListGroup style={{ minWidth: '22rem' }} light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Registrar Curso</p>
                      </div>
                    </div>
                    <MDBBtn tag='a' href='./registrarcurso'>
                      Curso
                    </MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBListGroup style={{ minWidth: '22rem' }} light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Registrar Bloque</p>
                      </div>
                    </div>
                    <MDBBtn tag='a' href='./registrarbloque'>
                      Bloque
                    </MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>

              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}



// import "./asistencia.scss"
// import SidebarAdm from "../../components/Sidebar/SidebarAdm";
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
// import Button from 'react-bootstrap/Button';

// const Registrar = () => {

//   const navigate = useNavigate();


//   const agregarAsignatura = () => {
//     navigate("/registrarAsignatura")
//   }
//   const agregarCurso = () => {
//     navigate("/registrarCurso")
//   }
//   const agregarBloque = () => {
//     navigate("/registrarBloque")
//   }

//   return (
//     <div className="asistencia-container" >
//       <SidebarAdm />
//       <div className="container" >
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol lg="6" className="mb-4 mb-lg-0">
//             <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
//               <MDBRow className="g-0">
//                 <MDBCol md="4" className="gradient-custom text-center text-white"
//                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>


//                 </MDBCol>
//                 <MDBCol md="8">
//                   <MDBCardBody className="p-4">

//                     <MDBTypography tag="h6">Agregar Asignatura</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <div className='add_btn'>
//                         <Button variant="primary" onClick={agregarAsignatura}><FontAwesomeIcon icon={faPlus} />&nbsp; Asignatura </Button>
//                       </div>
//                     </MDBRow>

//                     <MDBTypography tag="h6">Agregar Curso</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <div className='add_btn'>
//                         <Button variant="primary" onClick={agregarCurso}><FontAwesomeIcon icon={faPlus} />&nbsp; Curso </Button>
//                       </div>
//                     </MDBRow>

//                     <MDBTypography tag="h6">Agregar Bloque</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <div className='add_btn'>
//                         <Button variant="primary" onClick={agregarBloque}><FontAwesomeIcon icon={faPlus} />&nbsp; Bloque </Button>
//                       </div>
//                     </MDBRow>
                    

//                   </MDBCardBody>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </div>
//     </div>
//   )
// }
// export default Registrar