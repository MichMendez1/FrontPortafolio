import "./perfil.scss"
import "./asistencia.scss"
import Sidebar from '../components/sidebar/Sidebar'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

const PerfilEst = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const { nombres, apellido_paterno, apellido_materno, email, direccion, telefono, tipo, genero, cursoID } = user || {}
  return (
    <div className="asistencia-container" >
      <Sidebar />
      <div className="container" >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{nombres} {apellido_paterno} {apellido_materno}</MDBTypography>
                  <MDBCardText>{tipo}</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Información personal</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Género</MDBTypography>
                        <MDBCardText className="text-muted">{genero}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Codigo de Curso</MDBTypography>
                        <MDBCardText className="text-muted">{cursoID}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBTypography tag="h6">Información de contacto</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Teléfono</MDBTypography>
                        <MDBCardText className="text-muted">{telefono}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
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
export default PerfilEst