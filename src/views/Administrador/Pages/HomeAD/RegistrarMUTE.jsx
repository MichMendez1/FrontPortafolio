import "./asistencia.scss"
import SidebarAdm from "../../components/Sidebar/SidebarAdm";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const Registrar = () => {

  const navigate = useNavigate();

  const agregarDia = () => {
    navigate("/registrarsala")
  }
  const agregarAño = () => {
    navigate("/registrarAnno")
  }

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
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Agregar Año</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <div className='add_btn'>
                        <Button variant="primary" onClick={agregarAño}><FontAwesomeIcon icon={faPlus} />&nbsp; Año</Button>
                      </div>
                    
                    </MDBRow>
                    <MDBTypography tag="h6">Agregar Dia</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                    <div className='add_btn'>
                    <Button variant="primary" onClick={agregarDia}><FontAwesomeIcon icon={faPlus} />&nbsp; Dia</Button>
                  </div>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  )
}
export default Registrar