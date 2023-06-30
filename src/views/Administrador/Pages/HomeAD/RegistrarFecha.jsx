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
                        <p className='fw-bold mb-1'>Registrar Año</p>
                      </div>
                    </div>
                    <MDBBtn tag='a' href='./registrarsanno'>
                      Año
                    </MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBListGroup style={{ minWidth: '22rem' }} light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>Registrar Dia</p>
                      </div>
                    </div>
                    <MDBBtn tag='a' href='./registrardia'>
                      Dia
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