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
                        <p className='fw-bold mb-1'>Registrar Director</p>
                      </div>
                    </div>
                    <MDBBtn tag='a' href='./registrarsdirector'>
                      Director
                    </MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBListGroup style={{ minWidth: '22rem' }} light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Registrar Asistente</p>
                      </div>
                    </div>
                    <MDBBtn tag='a' href='./registrarAsistente'>
                      Asistente
                    </MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBListGroup style={{ minWidth: '22rem' }} light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Registrar Trabajador</p>
                      </div>
                    </div>
                    <MDBBtn tag='a' href='./registrartrabajador'>
                      Trabajador
                    </MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBListGroup style={{ minWidth: '22rem' }} light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Registrar Trabajo</p>
                      </div>
                    </div>
                    <MDBBtn tag='a' href='./registrartrabajo'>
                    Trabajo
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

//   const agregarTrabajador = () => {
//     navigate("/registrarTrabajador")
//   }

//   const agregarAsistente = () => {
//     navigate("/registrarAsistente")
//   }

//   const agregarDirector = () => {
//     navigate("/registrarDirector")
//   }

//   const agregarTrabajo = () => {
//     navigate("/registrarTrabajo")
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

//                     <MDBTypography tag="h6">Agregar Director</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <div className='add_btn'>
//                         <Button variant="primary" onClick={agregarDirector}><FontAwesomeIcon icon={faPlus} />&nbsp; Director</Button>
//                       </div>
//                     </MDBRow>

//                     <MDBTypography tag="h6">Agregar Asistente</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                     <div className='add_btn'>
//                     <Button variant="primary" onClick={agregarAsistente}><FontAwesomeIcon icon={faPlus} />&nbsp; Asistente</Button>
//                   </div>
//                     </MDBRow>

//                     <MDBTypography tag="h6">Agregar Trabajador</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <div className='add_btn'>
//                         <Button variant="primary" onClick={agregarTrabajador}><FontAwesomeIcon icon={faPlus} />&nbsp; Trabajadores Varios</Button>
//                       </div>
//                     </MDBRow>

//                     <MDBTypography tag="h6">Agregar Trabajo</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <div className='add_btn'>
//                         <Button variant="primary" onClick={agregarTrabajo}><FontAwesomeIcon icon={faPlus} />&nbsp; Trabajos Varios</Button>
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